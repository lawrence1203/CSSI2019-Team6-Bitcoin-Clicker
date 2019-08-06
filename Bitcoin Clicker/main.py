import webapp2
from google.appengine.api import users #use the Google Users API
from google.appengine.ext import ndb
import jinja2
import os

#simple datastore model to remember names and emails only
the_jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions =[ 'jinja2.ext.autoescape'],
    autoescape = True)

class CssiUser(ndb.Model):
  email = ndb.StringProperty(indexed=True)
  first_name = ndb.StringProperty()
  last_name = ndb.StringProperty()

gameRedirect = '<a href="/playnow">Play Game</a>'

class MainHandler(webapp2.RequestHandler):
  def get(self):
    #users.get_current_user() return a user object if someone is
    #logged in already. It will return None if the user has not logged in yet.
    user = users.get_current_user()
    # If the user is logged in...
    if user:
      signout_link_html = '<a href="%s">sign out</a>' % (
          users.create_logout_url('/'))
      email_address = user.nickname()

      cssi_user = CssiUser.query().filter(CssiUser.email == email_address).get()
      # If the user is registered...
      if cssi_user:
        # Greet them with their personal information
        self.response.write('''
            Welcome %s %s (%s)! <br> %s or %s <br>''' % (
              cssi_user.first_name,
              cssi_user.last_name,
              email_address,
              signout_link_html,
              gameRedirect))
      # If the user isn't registered...
      else:
        # Offer a registration form for a first-time visitor:
        self.response.write('''
            Welcome to our site, %s!  Please sign up! <br>
            <form method="post" action="/">
            <input type="text" name="first_name">
            <input type="text" name="last_name">
            <input type="submit">
            </form><br> %s <br>
            ''' % (email_address, signout_link_html))
    else:
      # If the user isn't logged in...
      login_url = users.create_login_url('/')
      login_html_element = '<a href="%s">Sign in</a>' % login_url
      # Prompt the user to sign in.
      self.response.write('Please log in.<br>' + login_html_element)

  def post(self):
    # Code to handle a first-time registration from the form:
    user = users.get_current_user()
    cssi_user = CssiUser(
        first_name=self.request.get('first_name'),
        last_name=self.request.get('last_name'),
        email=user.nickname())
    cssi_user.put()
    self.response.write('Thanks for signing up, %s! <br><a href="/">Home</a>' %
        cssi_user.first_name)

class GamePage(webapp2.RequestHandler):
    def get(self):  # for a get request
        welcome_template = the_jinja_env.get_template('bitcoin.html')
        self.response.write(welcome_template.render())  # the response

app = webapp2.WSGIApplication([
  ('/', MainHandler),
  ('/playnow', GamePage)
], debug=True)
