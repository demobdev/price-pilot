# SaaS Development Masterclass - Parity Deals Clone

**Build a million-dollar SaaS business** using modern Next.js features and clean code practices

## 🚀 Project Overview
A step-by-step implementation of [Parity Deals](https://paritydeals.com) (a real $1M+/year SaaS business) with improvements to:
- Country-based dynamic pricing
- Customizable discount banners
- Subscription-based permissions
- Advanced analytics dashboard
- Stripe integration

**Key Features**:
- 💰 PPP (Purchasing Power Parity) discounts
- 🎨 Fully customizable promotional banners
- 📊 Timezone-aware analytics
- 🔐 Role-based access control
- 🔄 Real-time caching system

## 🛠 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **UI**: ShadCN + Tailwind CSS
- **Auth**: Clerk
- **Database**: Neon (PostgreSQL) + Drizzle ORM
- **Payments**: Stripe
- **Infra**: Vercel

## ⏰ Full Timestamps

| Timecode   | Section                                  | Key Topics                          |
|------------|------------------------------------------|-------------------------------------|
| 00:00:00   | Introduction                             | Project goals, revenue potential    |
| 00:01:10   | Project Demo/Overview                    | Feature walkthrough                 |
| 00:04:35   | Next.js Setup                            | App initialization, config          |
| 00:07:35   | ShadCN Setup                             | Component library integration       |
| 00:09:07   | Navbar Design                            | Responsive navigation structure      |
| 00:15:50   | Clerk Setup                              | Authentication flow                 |
| 00:18:29   | Landing Page Design                      | Hero section, pricing table          |
| 00:46:44   | Sign In/Sign Up Pages                    | Custom auth pages                   |
| 00:50:16   | Dashboard Navbar Design                  | Admin navigation setup              |
| 00:54:04   | Private Route Setup                      | Protected routes system             |
| 00:56:44   | Database Setup                           | Neon configuration                  |
| 00:59:40   | Type Safe Environment Variables          | Validation with Zod                 |
| 01:03:40   | Drizzle Setup                            | ORM configuration                   |
| 01:19:17   | Clerk Webhooks                           | User sync with database             |
| 01:26:51   | IMPORTANT: Database Clean Code           | Schema design best practices        |
| 01:29:28   | Finish Clerk Webhooks                    | Event handling completion           |
| 01:33:00   | Dashboard Home Page                      | Summary metrics setup               |
| 01:37:25   | New Products Form                        | Form handling with React Hook Form  |
| 02:04:30   | Product Grid                             | Data table implementation           |
| 02:31:00   | IMPORTANT: Caching System               | Optimistic UI updates               |
| 02:52:40   | Edit Product Details Form               | CRUD operations                     |
| 03:08:34   | Edit Product Country Discounts Form     | Geographic pricing logic            |
| 03:52:10   | Start Edit Product Customization Form   | CSS variable management              |
| 03:54:36   | IMPORTANT: User Permissions             | Role-based access control           |
| 03:58:10   | Finish Edit Product Customization Form  | Preview system implementation        |
| 04:16:49   | More User Permissions                    | Subscription tier logic             |
| 04:24:40   | User Subscription Page                   | Stripe integration setup            |
| 04:36:10   | Stripe Integration                       | Payment processing                  |
| 05:08:49   | Banner API                               | Dynamic content delivery            |
| 05:31:52   | Analytics Page                           | Chart.js integration                |
| 06:25:57   | Fixing Mistakes                          | Debugging & final polish            |


by the end of this video I'm going to show you all the code you need to write to create a business that can easily earn over a million dollars a year and
0:07
I'm going to be doing it using the latest and greatest nextjs features and I'm even going to show you how you can write your code in a way that is very
0:13
modular modern and clean so you can extend this project to be as large and complex as you need it's honestly some
0:19
of the best code that I've ever written that I'm going to show you in this video and to create this seven figure business
0:24
we're going to be making a clone of the site parody deals this is a real application that as you can see I currently use I pay about $500 to $1,000
0:31
a year to this service and same with all of these other people they're all paying hundreds or even thousands of dollars to
0:37
this service I'm going to show you how to create a clone of it that does all of the same things and even improves on many of the problems that this site has
0:43
and throughout this entire process I'm going to be explaining exactly what I do step by step so you can understand why
0:48
the code works why I'm writing it the way I'm writing it and what actually makes it clean code this is going to be a really long video but I guarantee if
0:54
you stick through the entire thing you're going to learn invaluable skills that'll help you with this project and any other project you build
1:00
[Music] welcome back to web dev simplified my name is Kyle and my job is to simplify
1:06
the web for you so you can start building your dream project sooner and to understand how this project can earn over a million dollars a year we first
Project Demo/Overview
1:12
need to understand what the project is that we're building I already talked about it being a clone of the parody deals website and essentially all this
1:18
website does is figure out what country a user is coming from and then it shows them a different coupon based on where
1:24
they're coming from so that someone from India for example can get a higher discount than someone from the US where maybe they don't even need a discount so
1:31
for example I have here multiple different products and if I were to go into edit one of these products you can see if I click on the countries tab I
1:37
can determine exactly what discount I want to give to different groups of countries and all these countries are grouped by the amount of discount that
1:42
they should get so for example the purchasing poty in this group of countries is anywhere between 20 to 30%
1:48
of the purchasing power in the US so someone from this group has about 20% of the buying power somewhere from the us
1:54
so we can offer them a rather large discount while someone up here in this higher group we may not want to offer any discount at all because they already
2:00
have really good purchasing power now since I'm from the US I put a discount of 12% in here with a coupon Cod of test
2:05
and if we go to the website where this is hosted you can see I get a banner at the top saying hey you're from the United States we support this purchasing
2:11
imp parody here's a coupon of the code test to get 12% off anything on our site and the really nice thing is is we can
2:16
actually customize exactly what this Banner looks like in this customization section we can change the text we can change the colors we can change the font
2:22
size for example I can make it a really large font size give that a quick save now if I come over here refresh you can
2:27
see it's much larger I can customize EX everything I want to do and I even have set up for CSS prefixes so you can
2:34
manually customize the exact CSS that comes out so you can really configure it to be anything that you want it to be on
2:39
top of that we have in-depth analytics on exactly what's happening for example we can see you know each day who's
2:45
coming to our site we can see exactly what groups these people are coming from and even the individual countries everyone that's visiting our site is
2:51
coming from and we can even determine it based on each individual product we can change the ranges and we can even change
2:56
the time zone that we show this information in so for example if you want to see it in your your local time zone or UTC you can change that right
3:02
there lastly we can manage all of the information about our subscription and that's because this is a full SAS application which is how it can earn
3:08
over a million dollar a year because you can see on this highest plan you have to pay $100 a month and you only need a
3:13
th000 people paying $100 a month actually less than a th000 people technically but a th000 people paying $100 a month is over a million dollars
3:20
of year in income for your product and that's something that you can easily achieve with the product that I'm about to show you how to build so you can see
3:26
here we have a SAS with different permissions and different levels of things that they can have for example about how many products their different monthly usage and so on and you can even
3:32
manage your description and all this is handled inside a stripe so you can go ahead update your pan update your payment information and so on literally
3:38
everything you would ever want to change or you can just you know manually say I want to swap to the $100 a month version and here you go I can just click Swap
3:44
and it's that easy we also have in-depth permission handling for example if I log into a separate account that is on the
3:49
basic free subscription plan you can see they don't have access to analytics and they don't have access to Banner customization and they can only have one
3:55
product so for example if I try to create a new product I get a warning saying hey permission denied if I try to access analytics again permission denied
4:02
or if I try to edit my product and I want to customize it again permission denied these are not things that you can change I'm going to show you how to
4:07
build all of that in this video and the best part is I'm going to show you how to do it using modern tools such as nextjs and I'm going to show you how to
4:14
build it in a way that is clean code and maintainable which means that we're going to be able to handle all these things like permissions in a way that
4:20
it's super extendable to literally anything you want same thing with caching we're going to have a really robust caching system I'm going to have
4:26
different rules and clean code practices in place to make this the best code that you could possibly write so no matter
4:31
how large this code base grows it's still going to be just as easy to work on as when you just getting started now to get started I just have a blank text
Next.js Setup
4:37
edit to open we're going to be using nextjs for our framework of choice so npx create next app at latest to get the
4:45
latest version and we're going to install that in the current version of our directory I'm going to hit yes to proceed I'm going to say I want to use
4:50
typescript eslint Tailwind CSS The Source directory the app router and I don't really care about customizing my
4:55
import Alias now that's going to go ahead and install and while that's happening I want to talk about our full Tech stack we have nextjs for our
5:01
framework we're going to be using Shad CN and Tailwind UI for all of our CSS and styling we're going to use stripe
5:07
for handling all of our different payment billing SAS Integrations and so on we're going to be using clerk for our authentication and we're going to be
5:13
using neon for our database which is built on top of drizzle and postgress which is what we're going to be using for our omm and behind the- scenes
5:19
database now Clerk and neon are sponsors of this video and it's really great that they're able to sponsor videos like this
5:24
because they're tools that I already use anyway and it allows me to build these massive large projects in enely for free
5:30
for you to be able to use because these take weeks of my time even months sometimes to build out so be able to
5:35
share this with you for free is only possible with Clerk and neon sponsoring so I highly recommend checking them out if you like their product in the video
5:41
now once we have our basic application up and running we can just npm run Dev and that's going to start our application we can open up on Local Host
5:47
3000 and we'll just see the boiler plate nextjs screen now before we go ahead and actually do anything the very first thing that I want to do is just take our
5:54
code and clean it up a little bit cuz we don't need a lot of the default stuff for example I don't really care about having this vacon we can change it to
6:00
our own inside of here I'm going to pretty much get rid of all of these basic Styles except for the Tailwind ones I'm just going to leave that in
6:05
there and our layout we can keep these default fonts that they give us that's okay you can see we have our font showing up right here and then finally
6:11
in our page I'm just going to get rid of everything and Export a default function homepage and I'm just going to return
6:18
null from there just so we have a blank page to start with now the final thing I want to do is to set up our Tailwind config because inside this layout we
6:24
have these different fonts that we want to be able to use so if we come into Tailwind we can get rid of this extension for the colors since we're not
6:29
actually using those base colors anymore and instead we can extend the font families so I'm going to copy in the
6:35
code for this if we look over at our page our layout you can see here that we have a mono font being imported and a
6:40
Sans font being imported so inside of here all that I'm doing is I'm saying okay for my Sans font I want to use that
6:46
and for my mono font I want to use that and otherwise I'm going to fall back to the default F font family so we can get
6:51
that font family from Tailwind CSS and that's
6:56
going to be coming from the default theme so we can just just type in like that and there we go now we've extended our font family to use that font family
7:03
directly from nextjs that we're importing the next thing I want to do is I want to slightly modify how my container looks so for my container I
7:10
want to center it by default and this is just the container class that you add on to anything so anytime I add a container
7:16
class I want to make sure that it's going to be centered I want to have some padding on the sides of 1.5 RM and I want to make it fill 100% of my screen
7:23
size up to 1200 pixels at the maximum size it'll never be larger than 1200 pixels just so it doesn't get too wide
7:29
so so those the only changes I'm going to be making to my Tailwind config and that's just going to make it so my container looks a little bit better we
7:34
can close out of that and we can close out of our layout now the next step I want to go through before we start building out some code is to install
ShadCN Setup
7:39
Shad CN so we can just go through the installation steps they're rather easy we can just run npx Shad CN at latus and
7:45
knit and if you just put- D it uses the default values which is what we're going to do so I'm just going to install that right now and what that's going to do is
7:52
it's going to essentially set up a bunch of different files for us if we just wait a second for that to finish you'll see inside of our source folder we now
7:58
have a lib folder that contains all of our utils and if I were to add something like this button component which I'm just going to paste in here to add
8:04
you'll now see that that's going to add a components folder and inside that component's folder is going to be our button right here which we can make any
8:10
changes that we need to now the very first change that I want to make to our application is back inside of our layout I want to change some of the styles that
8:16
we have here right now we have our fonts in this anti-alias thing but I also want to make sure that I set this to font
8:21
sand to make sure it Imports the actual custom fonts and I want to set my background to my background color that
8:27
way it has a slightly different background color on our page now I also want to modify some of the variables in our CSS file because that's really the
8:34
beauty of using Shad CN is you can change any of these variables to exactly what you want in our case I want to change what our accent color is cuz by
8:40
default the accent color is the same as this muted in secondary color I want this to be like a blue color that's going to be what our application is so
8:46
we're going to use 193 as our Hue we're going to use 82% here as our saturation
8:52
and then we're going to use 31% for our lightness and you could also add in a dark mode version of this but there is
8:57
no dark mode in our site so I'm just going to ignore that for now and move on to the foreground version and for our foreground version we're just going to
9:03
set this to 0 0 and 100% which is essentially Pure White now before we bother with stripe Clerk or neon I want
Navbar Design
9:09
to go ahead and just work on creating the actual homepage this landing page of our application so the best way for us
9:15
to do that is to separate our app into two distinct groups we're going to have our group for marketing this is like our
9:21
homepage and so on and then we're going to have a group for our dashboard and I'm actually going to put our dashboard group in its own URL so everything
9:28
that's SL dashboard is going to be for our dashboard Pages like our creating products and all those different
9:34
customizations that we talked about while anything in this marketing folder is specifically for things like our homepage and so on and the nice thing
9:40
with doing it this way is it makes it really easy to see okay everything in dashboard is for our dashboard everything in marketing is for all of
9:45
like our homepages and so on our landing pages and marketing and pricing tables all that jazz so in here let's go ahead
9:51
and create a layout. TSX this is going to be a function which is our marketing
9:57
layout let's get the children in side of there and we're going to say the children are a react node just like that
10:04
now inside of this component it's going to be pretty straightforward I'm just going to return a div that allows us to actually create some styling to wrap
10:10
everything I'm going to have a nav bar inside of here this is a custom component we're going to create outside
10:15
of this component and then I'm going to render out our children below that now the only thing that I want to do inside
10:21
of my nav is you can see on this page when I highlight it gives me this nice color of like pink when I highlight so I want to add that pink color so let's add
10:27
a class name here we can specify the selection class that's for tailwind and we can specify when we want to modify
10:33
the background and we want to give it a specific color I'm just going to copy over that color just like that so we can
10:39
see that this color is going to be this purplish color but it's at a 20% opacity so now if I were to actually highlight
10:45
something for example I put some text inside of there come back to my application and of course right now when I'm refreshing nothing happens and
10:50
that's cuz it's rendering this blank page here we don't actually need this page to be here I want it to be in my marketing layout so now it's going to
10:57
render that blank page inside of here so let's make sure we give everything a quick save close out of that there we go
11:03
and now if I give my page a refresh you notice we're getting errors that's because this should be a default export
11:08
there we go so now when I highlight this pink text or this text you can see I get this nice pink background it looks relatively good now let's go ahead and
11:15
focus on our nav bar because that's the next thing I want to work on and also to help keep my code clean I could put this
11:20
component directly in my component's folder but this Navar is only for pages on my marketing layout so instead I'm
11:26
going to actually put that directly in this folder here called under score components by putting an underscore in
11:31
front of a folder name it means it's ignored for all routing purposes so this will not do any routing and now inside
11:36
of here I can create my navb bar. TSX file this is really great because now all my marketing only components can be
11:42
in this folder right here this is just one small step on creating clean code which we're going to cover a lot in this video so now here I want to export that
11:49
Navar component it's not going to take in anything and it's going to start by having a header because this is going to
11:54
be the header of our application inside of there we're going to have a nav which is going to contain all of our different links and we can go ahead and create our
12:00
links which come from nextjs now this very first link is just going to link to our homepage so we'll give it that right there and it's also going to push
12:06
everything off to the right hand side you can see here we have our big link on the left and if I just expand my screen a little bit grab all of our other links
12:12
obviously this is not super well mobile optimized but all those links you can see are pushed off to the right hand side again this parody deal site has a
12:19
lot of improvements that could be made to it and we're going to be making those improvements so to push all of our other links to the right we'll say margin
12:24
right of Auto and we also need to have a flex container to be inside of here to make that margin right work so we'll
12:30
make this a flex container there we go we'll also put our items in the center while we're at it so we'll say items Center and a gap of 10 to separate
12:37
essentially this parody deals from the text on the right otherwise if we don't do that we're going to run into a problem where we have all the text squished up together so we're going to
12:44
fix that by putting in a gap there I'm also going to give this the container class to make sure all of the content
12:49
inside this nav does not get too large for example if we increase the screen size here and we zoom out you can see
12:54
here it confines the size of the space that our nav can take up so that's essentially what our container is allowing us to do is just confine the
13:00
space that everything takes up lastly just to make my font pop a little bit we're going to say our font is going to be semi bold so it's just a slightly
13:06
more bold than normal font now inside of here I'm actually going to put my brand logo and I'm going to put that inside of
13:11
its own component that's because I'm going to use this in a lot of different places and I'm going to use this both on my homepage as well as inside of my
13:18
dashboard so this is a component that makes sense to put in this component's folder so we'll say here that we have our brand logo. TSX because this will be
13:26
used everywhere inside of our application now I'm just going to copy the code over for our brand logo and explain what it is cuz it's relatively
13:32
straightforward all we have is a single span which we have a flex container set up on with a gap of two to give it a little bit of space we made the font
13:38
semi bold which in this case is not super required but again we're just reinforcing that it's semi bold we're making sure it can't shrink down at all
13:45
and then finally we're making sure everything is pushed off to the right hand side we could probably get rid of this that should still work just fine and we're also making this so our text
13:52
is a little bit larger finally inside here we have this globe icon that's showing up and we have this span
13:57
obviously you can create your own custom icon so on but this is just a really basic Bare Bones version we can get working so now let's import all this to
14:03
actually see if what we've written is working so inside here we're going to import that nav bar and if we go back to
14:08
our application you can see at the very top here we have our logo showing up so far we don't have any other crazy styling going on but at least we have
14:14
something working now to make it a little bit more obvious that essentially we have our nav bar at the top with
14:19
different styles on it to distinguish it from the rest of our application let's style our header a little bit by giving this some class names so we can say here
14:26
the class name on this is going to be Flex to be a flex container we're also going to put some padding in the y direction of six to space things out I'm
14:33
going to add a large Shadow on it so if we give that a quick save you can already see that now we have at least separated this a little bit I'm also
14:39
going to fix this to the top of the screen so we'll say fixed with a top of zero and we're going to make sure it fills the full width by using a w of
14:46
full lastly to make sure it shows up on top we'll put a z index on it and the background color I'm going to make it
14:51
partially transparent so I'm going to use my background color but I'm going to make it 95% opaque so that means it has
14:57
a slight transparency which which means if there's any text behind here it'll slightly show through which is exactly
15:02
how the parody deal site works if I expand this and I scroll down you can see that you can see all the text behind it our site's going to have that exact
15:09
same feature inside of our navigation as well now we're going to want to add the rest of our links down so let me just paste in a couple more links we have a
15:15
features link a pricing link and an about link they're all exactly the same text of large and right now we're not going to create these pages so I just
15:21
gave them blank HFS except for pricing it has an HF with an anchor on it that's because we're going to put the pricing on our page so this will scroll to that
15:27
section so there is the rest of our links right there and again they do absolutely nothing when you click them now the final thing I want to add is
15:33
going to be a link for signing in and signing out so we're going to have a span here to make that text large so we'll say text large just like that and
15:39
then what I want to do is I want to come in here and I want this to either say dashboard or I want it to say log in so
15:45
if we are signed in I want it to say one thing versus the other so this is where we're going to need to integrate clerk into our application which is a
Clerk Setup
15:51
relatively easy process and it contains all the components that we need so the first thing we need to do is to install
15:56
clerk so we want to say at clerk SL JS because we're using nextjs that's going to install all the different components
16:02
that we need inside of our application and once we get that done we can actually see now inside of here we have
16:08
a component for signed in and this is going to be only rendering out the content in here if the person is signed
16:13
in so in here we can put a link that goes to our dashboard page if they are signed in just like this dashboard so
16:21
now if the user is logged in it'll show dashboard we also have a component for signed out and this is only going to
16:27
render if they are signed out and we can render the signin button so we can just say signin button like that and it's
16:32
going to say the text log in now we are going to get some errors when I try to render this out because we don't have clerk set up on our application the
16:39
first thing we need to do is to handle some Clerk middleware and we also need to wrap our entire application in a clerk provider so if we go to our layout
16:45
we can come in here and wrap the entire thing inside of a clerk provider so this clerk provider just gives us access to
16:51
the authenticated user and our entire application that's step number one the second step is implementing our middleware and then we need to hook up
16:58
everything so let's go ahead and get started on creating an application just create an application inside a clerk determine how you want users to log in
17:04
let's say that we want to be able to log in with GitHub Google and email that works fine let's give our application a name of easy PPP because that is kind of
17:12
the name we gave our application we'll click create application and that's going to get us setup and now we can click on nextjs for installation steps
17:19
and this will actually tell us how to install everything with nextjs we've already gone ahead and installed this we can set up our environment variables
17:25
next so I'm going to copy that over come over to our application and I'm going to create a EnV
17:30
file just like that and paste in our file variables right here and the thing that I want to make sure that I do with
17:36
this environment variable so I want to make sure I ignore this from our get ignore so we can come in here EnV and
17:41
we're going to make sure that that is completely ignored from our application now the reason I'm using EnV like this is because when I start to use drizzel
17:48
it requires a EnV file so I can't use like env. loal so now we have those environment variable saved the next
17:54
thing that we need to do is to create a middleware file and give it this exact code so I'm going to copy this code I'm I'm going to create a brand new file
18:00
called middleware dots I'm going to paste in that clerk code right there by default this doesn't make any of our
18:06
routes protected at all everything is still publicly accessible but we can at least do login and sign up and so on and
18:11
I'll show you how to protect routes when we get to that point finally we need to wrap everything in cler provider like we did and that's literally it we're
18:17
entirely done so now back to our application we should see hopefully if we refresh here everything will work and now you can see we have a login button
18:23
because we are currently not logged in and when I click on this it's going to redirect me to the login page and so on so now that we're done setting up clerk
Landing Page Design
18:30
before we bother with doing like signin sign out logic and so on I just want to go ahead and finish out our homepage cuz right now it's pretty Bare Bones so
18:36
inside of our homepage we'll go to the actual page section and we should probably render out more than just null so I'm going to come in here I'm going
18:42
to render out a fragment and I'm going to break each of my different sections into a section tag so the very first
18:47
section I want to cover is going to be this like homepage section so if we bring this out you can see here it has this kind of interesting radial
18:53
background with some text as well as like a getting started button so I want to be able to incorporate all of that into our own page
18:59
so the very first thing that I want to do is to work on that fancy background so we can come in here we can say the class name is going to have a Min height
19:05
of screen it's just going to make sure this section fills 100% of the screen height and then we can specify our
19:10
background now I'm going to copy over the value for this background because it's just a very complicated radial
19:15
gradient and I'll explain exactly what's going on so we have a radial gradient right here and essentially we're going between a few different colors we
19:21
essentially have this first color which is going to be either that purple or that pinkish looking color and our second color which is the other version
19:27
of that purplish pinkish color and then finally we're fading out to our background color at around 60% and
19:32
that's just to make it so that this radial gradient only fills up this middle portion of our screen and doesn't extend to fill our entire screen now if
19:39
I give that a quick save you can now see we have that purplish orish radial gradient in our screen that Fades out to
19:44
60 at 60% to our background if I were to remove this section with my background you'll see that this fills my entire
19:50
screen not what I want that's why I have this background section on there so we have our really big complicated radial gradient set up next thing I want to do
19:57
is just Center everything so we'll say Flex items in the center justify everything in the center and I'm going
20:03
to put my text in the center and I'm also going to use text of balance which makes it so that when I shrink down my
20:08
screen size my text stays as close to possible on the best looking lines instead of just having like one text on
20:14
the bottom line like this one will it'll actually perfectly balance my text across multiple lines so it'll look even better than the homepage that we're
20:20
trying to copy finally I want to make sure that I have a flex direction of column I want to have a gap of eight and
20:26
I want to have some padding on the right and left of four so now what we can do is we can get our text inside of here
20:32
I'm going to have an H1 for my main text this price smarter sell bigger section I might as well just copy that text
20:37
because we're going to use the exact same text then I'm going to have a paragraph tag next and that's going to copy this exact text so we'll paste that
20:44
into there and then finally I'm going to have a button and this is going to be a sign up button so all I'm going to do is
20:49
when I click get started for free it's going to bring me to the sign up page so we're going to have our sign up button and inside that we're going to have our
20:54
button from Shad CN now I'm going to specify quite a few classes on here for example I want this to be a large button
21:00
so I'm going to have a large text size on here just like that I'm going to have some pretty large padding on the sides
21:06
and the top so I'm just going to say p of six just like that I want it to be a rounded XL so it's slightly larger on
21:12
the rounding a flexed as well as a gap of two and that's because inside of here I'm going to have the text get started
21:17
for free and then finally I'm going to have an arrow that is going to the right so I want to get the arrow right icon
21:24
and we can also specify a size of that which is going to be a size of five so now if I come back over to here you can
21:29
see I have that button set up with all the different styling I want all I need to do is style my text to make it look a little better but first you'll notice
21:35
when I shrink down my screen size you can see it's perfectly balancing my text across multiple different rows which is
21:40
really something that's quite amazing I love that CSS feature so let's come in here and we can style out what our heading is going to look like we want
21:47
our text to be rather large so we're going to say 6 XL but if we're on a large screen size I want it to be 7 XL
21:53
and if we're on an even larger screen size I want it to be 8 XL so it's going to scale the font size with large my
21:59
screen is I also want my font to be bold I'm going to set the tracking to tight to make my letters a little closer
22:04
together and then add some margin I'll show you what that tracking tip does if I remove this you'll notice how far
22:09
apart my letters are spaced while when I add that back in it brings my letters closer together generally when you have larger font sizes it's better to use a
22:17
tighter tracking because it makes your font a little bit easier to read instead of spreading everything out while with smaller font sizes it's better to have
22:23
larger line spacing and have larger tracking to space out your letters a little more so again it's easier to read
22:29
now for our paragraph here we can change our text I'm going to make it a large text by default but on a large screen
22:35
I'll make it a text of three XL to make it quite a bit bigger and I'll also maximize the size that this can bring to
22:41
my extra large screen so that way it doesn't get too large so now if I just come in here and I make this a little
22:46
bit bigger you'll notice that my font stays super big and it never actually becomes too wide because I'm making sure
22:52
I'm clamping the size that it can actually be so it looks really really good on multiple different screen sizes so that's essentially the top section of
22:58
our entire thing done we can close that down and move on to the second section which is a section that's like hey here's all the different companies that
23:04
use this particular product this is a really great thing to have on a sales page to be like hey look at the proof I'm this good and all these other
23:10
companies use me so we can come back over to our application here I want to have this section b a class name with a
23:16
background of primary and I want to have my text be primary foreground so essentially it's going to invert my
23:21
colors we're going to have this nice blackish background with white text on top of it then inside of here I'm going to have an H2 that's because we already
23:28
used H1 up here so I want to have a heading for my second section being H2 and this is going to be the text right
23:34
here I'm just going to copy the text over same exact thing that's on their page trusted by the top modern companies
23:39
and we can add some styles to this for example we can make our text quite large we can Center it we can balance it and
23:45
we can also make sure that it's a little bit Bolder by saying it's a font of semi bold give that a quick save and that
23:51
should look pretty good as you can see down here and actually I don't really like that semi bolt so I'm going to remove that I think it looks a little better without that now in order to make
23:57
sure that everything is spaced out correctly I'm actually going to come in here with a div that I'm going to put all my content inside of and first thing
24:02
I want to do is add the container class just to space everything out a little bit better that's at least going to give us a little bit of padding and margin on
24:08
the right and left hand side and if we expand our screen you can see it looks relatively good we need to give some padding on the top and the bottom as
24:14
well so we're going to come in here with a py of 16 that's going to give us a ton of space on the top and bottom of this
24:20
we're going to say that everything in here is going to be flexed in the column Direction with a gap of 16 as well to
24:25
really space things out and we're going to give even extra padding on the right and left so we're going to say PX of 8 but on larger screen sizes we're going
24:31
to give it even more padding of 16 there we go so now everything should be super well spaced out make sure I do that like
24:38
that and now we can work on creating a grid of all of our different logos because this you can see is essentially
24:43
just a grid layout that scales as your screen gets larger and smaller so that's what we want to emulate as well so below
24:49
our H2 we're going to have a div which we're going to give a class of grid by default it's going to have two equal
24:54
sized columns on the medium screen size it's going to have three sized columns and then finally on the extra large
25:01
screen size we're going to go all the way up to five columns cuz we have enough space to support that and we're going to have a nice big gap of 16 in
25:07
between each different section now for our icons I could copy over all these different icons but instead what I decided to do is I decided to just use
25:14
icons for the clerk and neon since they're sponsoring this video I figured that I should just throw in their icons so all I did is I took the actual SVG
25:21
icons for them and I converted them over into a react component as you can see here this is the clerk SVG icon and if I
25:28
come over to here I have the neon SVG icon as well if you want to be able to get these icons directly from react you
25:34
can just come over to the GitHub repository Linked In the description and you can copy both of these different components over to your application or
25:40
you can create them yourself if you want but I figured I would give them to you if you want to be able to use them so now I can come in here I can create a
25:46
link tag so let's make sure we import that which an href that's going to go to either Clerk or neon in our case let's
25:51
make this a link to Neon so we'll put neon's homepage inside there and then we're going to render out our neon icon
25:57
component just like that so now if we give that a save and we come over to our application we should see we have the neon component showing up right there I
26:04
can copy this down and do the same exact thing for the clerk homepage so this one is just
26:09
clerk.com just like that and we can come over and render out our clerk icon there we go give that a save and now you can
26:15
see our clerk icon shows up and I can just copy this down a few times to have 10 total icons so this is going to be 4
26:20
6 8 10 give that a save and now you can see I have 10 different icons showing up but obviously this last icon should be
26:26
hidden when my screen is showing three icons cuz it kind of looks weird with this extra one so this final bottom icon
26:32
I'm going to have a class name on and whenever I'm between the sizes of medium and extra large I want to hide this so I
26:38
can say that I want to have this be a medium with a maximum of extra large and it's going to be hidden so between
26:44
medium and extra large it's going to hide this last final icon so I give that a save and now you can see the icon is
26:49
removed on smaller screen sizes you can see I'm going down to two icons accidentally click the link to Neon
26:54
there and if I zoom my page out and make it wider you'll see eventually I jump over to to five icons as well on a
26:59
larger screen size so this is super mobile responsive and it's looking really great on all different screen sizes now we finished up this entire
27:06
section and I could go through and build each one of these sections one to one from this homepage but honestly that's not the important part of this
27:11
application so instead what I'm going to do for the very last section as I'm going to build out a pricing section because obviously that's something you
27:17
need to have on pretty much any homepage and it's going to show us a lot of really important best practice clean coding things we can do which you're
27:23
going to see the benefit of as we build out the rest of this project it's going to save us so much time so first of all I'm going to give this an ID here of
27:29
pricing just so we can actually link to this page there we go pricing so that way when I click this pricing link it's
27:35
going to bring me to this exact section down here and if I put the text pricing in there and I scroll up click pricing you can see it brings me down to that
27:41
page where the pricing text is at the bottom now for our sizing for everything I want to have PX of 8 and I want to
27:47
have a py of 16 to give us a ton of space again and for this one I want to have a background of accent but I want
27:52
it to be very light it's only going to be 5% of our accent color so it's just going to give us a very light bluish color it honestly might not even show up
27:59
on the recording but as soon as we put a white card over top of it you'll definitely be able to see the difference between this very off blue color and the
28:06
white card that's on top of it the next thing we want to do is to add in our heading so we'll come in here we'll add in what our heading is you can see my
28:12
font size is going to be 4XL centered and balanced with a semi bold and some margin on the bottom so I give that a
28:17
save you can see we get our nice pricing section header right there and then finally we can move on to our grid so
28:22
this is going to be a grid we want to have two columns so we're going to say grid columns 2 but on a large screen
28:28
size we're going to move up to a grid Columns of four in this because I'm going to have four pricing tiers so it makes sense to either have a two column
28:34
Grid or a four column grid for this and then I want to also make sure that I have some gaps in here so a gap of four
28:40
the max screen for this is going to be extra large again so it doesn't get too large and we're going to center it by
28:45
using MX Auto so we can bring that down now and all I want to do in here is render out all four my different pricing
28:51
tiers but I want to be able to get this information in a place that I can reference all over my application so when I'm doing things like permissions I
28:57
can reference it whenever I want to render my pricing cards in a different location I can reference what are the things that each different tier can do
29:04
so what I'm going to do in my application here inside my source folder I'm going to create a brand new folder called data and this is where I'm going
29:10
to put things that are constant things that never change inside my application I'm going to create a brand new file
29:15
called subscription tiers. TS make sure I spell that properly
29:21
subscription tiers there we go and now inside here I want to write out all the information for each one of my
29:26
subscription tiers now I'm going to paste this down but I'm going to go over exactly how everything in sear works so you can see I have this object with all
29:32
my subscription tiers I have free basic standard and premium and I'm including all the information I need for example
29:38
what is the name of this how much does it cost in cense what is the maximum number of products the person can create
29:43
what is the maximum number of times I can show the banner for the user and then what are their different permissions can they access the
29:48
analytics can they customize the banner can they remove The Branding and then finally to link everything up with stripe I'm going to add this stripe
29:54
price ID for now we can just get rid of this section because we don't have stripe in our application we'll come back and add that in a little bit later
30:00
but this is all of our different subscription tiers now I want to make sure I order these in the correct order so I'm going to export another constant
30:07
variable called subscription tiers in order I'm going to set that equal to an array and what I can do inside of here
30:13
is I can say I want to get my free tier and then I want to get my basic tier so we're going to have basic I'm going to
30:18
bring this down for my standard tier and then finally I'm going to add in my premium tier as the last one so this is
30:24
in order from cheapest to most expensive because that's how I want to show that I'm going to set that as a constant variable cuz I never want this to change
30:31
so now we have this file that contains all of the source of Truth for everything related to our subscriptions and how different things are handled and
30:37
if we wanted to be able to update this and say you know what on the basic plan actually 20,000 people can view it we can change that in one place and it
30:42
updates everywhere in our application even on our homepage I'll show you what I'm talking about inside of here we can Loop through those subscription tiers so
30:49
I want to just map through each one of those tiers and I want to render them out inside of a pricing card so I'm
30:55
going to say pricing card just like that we have the key be our tier just like
31:00
that make sure I spell all this properly and I can make sure I actually get the subscription tiers in order because that's what I really need so now I can
31:07
see I get all my information the name I know is unique and then I just want to pass along all my different information
31:12
for my tier along to this pricing card which is a component I'm going to create right inside this file so we'll say
31:18
pricing card just like that now what I need to do is I need to specify all the different properties being passed along
31:23
to this so for example I have a name I have a price in cents
31:29
and I have all the other information that I've determined that I need to have that I set inside this subscription TI
31:34
file and take the type of this I can just say that this is going to be a type of it's going to be my subscription
31:40
tiers in order and I want to get an individual one so we're going to say get a number from there so what this is
31:45
essentially saying give me the type of what one of the elements inside this array is going to be and that's going to
31:50
give me all of this information and I can use this inside my pricing card now just to show you that this is working I'm just going to return the name
31:56
directly from here and give this a quick save and if we scroll down you can see I get my names being printed out in order
32:01
now we do have an error just cuz this is being imported it doesn't need to be imported and once we clean that up now all we need to do is render out what our
32:07
pricing card looks like so to use the pricing card I'm going to be using Shad CN and I'm going to import the card component so let's get the card
32:13
component imported from Shad CN so now inside of here I can render out a card directly from Shad CN and inside of
32:20
there we're going to have a card header and inside of that we're going to have a card title and then also I'm going to
32:25
put a card description into here as well so for my card title this is just going to be whatever the price is so I'm going
32:31
to put a dollar sign and I'm going to put whatever my price in senses times 100 there we go and I want that per
32:38
month so now that's just going to render that out so if I look here you can see we get our prices right there now it looks like things are wrong because this
32:44
should be divided by 100 there we go obviously I wanted to convert from cents to dollars not multiplying by 100
32:49
dividing by it now inside of my description this is actually where I want to put the information for how many visits they can show up on the page so
32:56
this is going to be my Max number of visits put that inside of
33:01
here and this is going to say pricing page visits per month give that a quick
33:07
save and now you can see we get 5,000 10,000 a million and so on but that's kind of ugly I want to format this in a compact number way so I'm going to
33:14
create a function called format compact number just like this and pretty much anytime in your application you
33:20
have code you know you're going to use in multiple places for example a formatter for formatting compact numbers I highly recommend breaking that out
33:27
into its own file so in this lib folder I'm going to create a formatters file so we'll say formatters TTS I'm going to
33:34
export a function which is called format compact number it's going to take in a
33:39
number and it's going to format it in a compact style for me so up here I'm going to say const compact
33:46
number formatter is equal to intl. number format I want to get a new one of these
33:54
I want to set the low cal to be undefined that way on where the user is coming from it'll show it to them in
34:00
their actual local and then I want to specify the notation to be Compact and if we do that real quick let me just
34:06
finish out what this function is going to be we just want to call format and pass in our number now if I import that
34:11
into this file right here you'll notice it's going to take things like 5,000 and convert it to 5K 1 million is 1 M
34:17
100,000 is 100k it's just much easier to look at and read and again if we change our numbers it's automatically going to
34:22
change our formatting for us now we also want to put the name of our product in here I'll put this inside the header at
34:27
the top and for this one I wanted to have some distinct Styles so we're going to say the text is going to be our accent color so it's going to be that
34:33
blue color we're going to say the font is going to be semi bold and we'll put the margin bottom of eight on this close
34:39
that off and inside of there we'll put our name just like that so now if we give it a save you can see it says free at the very top which looks really good
34:45
and we can even make our card title stand out a little bit more by making the text a little bit bigger so we'll say text extra large and font of bold so
34:53
that our price really sticks out compared to everything else so that's our header completely done and now we can work on the content section so we
34:59
can say card content I want to make sure that I import this file there we go and inside of here I'm going to have a
35:05
button for signing up so we're going to have a sign up button and inside of that I'm going to render out a button component directly from Shad Cen so
35:12
there we go and our button component is just going to say get started so now you can see I have a get started button right here but I want to change exactly
35:18
how this looks for different pages so for my standard one I want this to be considered my most popular one so it's
35:24
going to have like a fancy styling and coloring to make it look a little bit different so what I can do here is I can say const is most popular is equal to
35:33
and let me make sure I spell this right const move it up here so if the name is equal to standard then it is the most
35:40
popular so if we're the most popular one I want to change my variant so is most popular it's going to have one style
35:47
otherwise it's going to have a different so by default I just want to use my default style otherwise I want to use my
35:53
accent Styles but by default there is no accent variant inside of shad so we need to create our own accent variable which
36:00
is going to essentially change it so we're going to have a background of accent so all I want to do is change my background here to Accent I want to
36:07
change my text to be accent essentially so we can say text accent foreground just like that I want it to have a
36:13
shadow I also wanted to have a hover where its background accent and essentially I want to change that to a 90% opacity so essentially it's the
36:20
exact same thing as our default but I changed everything to accent so now we should have a purple button for our accent button let me just make sure
36:26
everything else is working good is most popular should be working for our button give that a save and now you can see we have a blue button for our standard
36:33
button I also want to change our Styles a little bit so we're going to come in here with a class name I'll make my text a little bit larger make the width full
36:39
width and I'll make it a little bit more rounded so we'll say rounded of large so now we have this big button that's
36:45
essentially saying hey get started in bold letters that's the call to action for our page now the final thing that we need to do that we have our sign up
36:51
button done is to finish up what our card content is going to be and that's going to be inside of our card footer
36:56
that's where each of our different featur feat is going to go I'm going to create my own component for those cuz this is something we're going to have
37:01
repeated everywhere in our application so a feature is going to be really basic it's just going to have a child and it's going to have a class name just like
37:08
that and I want to make sure that I actually give this some Styles so we'll say children is going to be a react node
37:14
and then we're going to have our class name which is an optional string that we can pass into here let me make sure I
37:19
have all that spelled out properly there we go that looks like it should be good import react node and now we just need
37:24
to use that information so we can return here a div which is going to have all my different classes and I want to have a
37:30
check icon so we can say check icon just like that that's going to be that check mark that we want to show up so for this
37:35
one I'm going to have a size of four I'm going to specify my stroke as an accent color and the background is going to be
37:42
the same thing but with 25% opacity I'm going to make it a full circle and I'm going to give it a very very small
37:47
amount of padding of 0.05 just like that so now we have our check icon showing up I can look at what this looks like by
37:54
just rendering out a feature just like this and I need to pass it along some really basic
37:59
information for example whatever I want my children to be that's going to be some text that I'm going to render inside of its own span right here there
38:07
we go so give that a quick save and you can see we have our check mark with some text showing up obviously I want this to
38:12
be side by side so I'm going to use some class name information right here and for this I want to use the CN library
38:17
that way I can combine for example my Flex item Center and GAP 2 class with
38:24
the classes that I passed in that are custom in case I need any custom classes so now you can see that lines these up side by side and I can also pass in
38:30
custom classes if I want so now let's go ahead and create all of our different features first of all I want to style this a little bit inside my card footer
38:36
so I'm going to say class name which is going to be a flex column with a gap of four and the items are all going to be
38:42
in the start just like that so now if I have multiple features you can see they're spaced out from one another now
38:47
what I want to do is I want to have this first feature be for the maximum number of products they can have and I want this one to be bold so we'll say font
38:54
bold just like that and inside of here I want to take my max number of products
38:59
and then after that I just want to put the text products give that a quick save now you can see if I look down here and
39:04
I make sure to actually refresh my page that you can see it says one products five products 30 and 50 now obviously I
39:09
want to get rid of the s in the case that I have one product so I'm going to add a little bit of extra styling into here so I'm just going to say if my max
39:16
number of products is equal to one then the text is going to be product
39:22
otherwise my text is going to be products now if I give that a save you can see it says one product or going to
39:27
have an S at the end for all the other different quantities so now let's go ahead and get the rest of my features implemented so we're going to have a
39:33
feature here and this feature is going to be the ability to have PPP discounts this is something every single tier has
39:39
access to and now for the rest of these features I just want to check hey can I customize the banner well if so then I
39:46
want to have a feature that says Banner customization there we go so now you can
39:51
see that only the tiers that have the ability to customize the banner which is the standard and premium show that particular feature I can do the same
39:58
thing here for if we can access the analytics well I want to add in advanced
40:03
analytics give that a quick save and now you can see only the ones that have access to analytics have that information and I'm actually going to
40:09
bump this up one just so it shows up over top the banner customization and I'm going to paste this down one more
40:14
time and this is going to be for anyone that can remove branding so we're going to say can remove branding and this is
40:20
saying remove easy PPP branding there we go so so now
40:27
anything that has the option to remove our branding which are these particular ones can do that and again I'm going to move this all the way up here right by
40:33
the analytics there we go so now all these tiers have analytics and can remove The Branding and only these ones
40:38
can customize the actual Banner so as you can see now even on larger screen sizes we have a really nice and robust
40:44
looking pricing system and the best part is let's say I go ahead and I'm like you know what I want to change how my different tiers work well I can go into
40:50
here and say you know what the free tier now is actually going to be 10 products give that a save boom it automatically updates everywhere in our application
40:57
that's why I love having these data files that contain all of our static data now the final section I want to work on is pretty much a section that
41:03
almost every site has which is just this really large footer section right here as you can see on parody deal site so
41:08
I'm just going to create our own version of that let's scroll all the way up here and create a brand new section but this one is going to be a footer because
41:14
obviously it's the footer of our application I want to add a class name here of container to contain it in a
41:19
size I want to have pading top of 16 padding bottom of eight we're going to make it a flex but on a small size it's
41:25
going to be Flex column again make it mobile responsive we're going to have a gap of eight except for on small screen
41:31
sizes we'll have a gap of four between all of our different sections we'll justify the content to have a between
41:36
and we'll say the items are going to be at the start so now we can go ahead and actually put all of our information inside here which has two distinct
41:43
sections the first is going to be a link which is going to go to our homepage and that's going to use our brand logo so
41:49
we've already used our brand logo once so again this is why we created a component for that so now down here you can see we have our brand logo in the
41:55
footer then we're going to have a section which contains all of our different links so we're going to come in here it's going to be Flex it's going
42:01
to be in the column Direction and on the small sizes we're going to put them in the row Direction otherwise we'll have a
42:06
gap of eight and if we look back at the parody deal site essentially I want to have all these different groups you can see here I have a group with all these
42:13
links I have another group with all these links and another group with all these links that's what each of these divs is and for each of these divs
42:18
inside of there I need to have a div for the actual footer links so what's come in here I'm going to create a div class
42:23
name flex and flex column with a gap of eight that's going to be if we come back
42:28
to here again for each of these individual sections so this very first Dev I created was for all the sections
42:35
combined together and this each individual div inside of there is for each of the three different columns I have so we can come back into here
42:41
scroll all the way up so this div right here is for our column and I'm going to create a separate component for this
42:46
called footer link group and this footer link group is going to have a few things it's going to have a title in our case
42:53
this will say help and then it's going to have our links and the links is going to be an array of objects where we're going to have a
42:59
label just like this for example this one we say PPP discounts and then it's going to have an href in our case all of
43:05
our HS are just going to be empty like this and if I make sure I clean up my code by putting these brackets in place
43:12
give that a save you can now see we have our first link showing up I'm going to put this on one line so it reads a little bit
43:17
better there we go and I'm just going to copy this down because we're going to have two links inside of here give that
43:24
a save and let's change this one to a discount AP there we go and now we just need to
43:30
create this footer link group so all the way down here function footer link group and we know that it's going to be taking
43:36
a title that comes inside of our props and it's also going to be taking our links now if we type these out our title
43:44
is a string and we're going to have our links which is going to be an object which is
43:49
a label which is a string an href which is a string and we're going to have an array of those there we go and now we
43:55
can render out what this group looks like so the first thing is I need a div to contain all of them and we're going to have these be in the column Direction
44:01
with a gap of four between them then the next thing I need to do is to put my header which I'm going to use an H3 for
44:07
so we'll say H3 close that off and this is going to be whatever that title for my group is going to be and I just want
44:13
to give it a few Styles so we'll say class name font of semi bold there we go the next thing I'm going to want to do
44:19
is to have a list which contains all my information and for this list I want it again to be in the column Direction but
44:24
with a smaller Gap so we'll use gap of Two And even some smaller text then we'll Loop through each one of our links
44:31
so for each link what I want to do is I want to render out An Li since we're inside of an ordered list with a key
44:37
that's going to be link. href because that's the only thing that's going to be the same or guaranteed to be unique then
44:43
we're going to come in here with a link and this is going to be an href which is my link. href and the label for this is
44:49
link. Lael relatively straightforward so now if we give that a quick save we make sure that everything that we need for
44:55
this footer group is like it should be so footer link group footer link group we have title we have links everything
45:01
should be good we're getting an error though oh and that's just because I need to make sure I return our jsx from here
45:06
so now back to our application scroll down to the very bottom and it looks like this is not rendering out like we
45:11
wanted to let's make sure we save still not showing up my guess is inside of here I didn't render out something properly looks like all that is proper
45:18
so that should be working my next guess is related to caching I'm just going to do a hard refresh and there we go it was related to caching so we have our
45:24
information showing up and if we go to a larger screen size you can see it's still working but obviously looks like
45:30
our Flex is actually swapped you can see on small screen sizes it shows up side by side while on large screen sizes it
45:35
shows top to bottom so we have something swapped with our Flex so if we go ahead and we look at our footer here this is where we have our Flex swapped on the
45:41
small screen sizes we should have a flex of row so let me change that to row and normally we should have a flex of column
45:48
that should hopefully fix that so you can see on a small screen size it's stacked like that and a larger screen size it stacked side by side now what we
45:55
need to do is just to finish out the rest of our footer link groups so inside of here the next section I have is for Solutions so you can see we have our
46:01
help and solution stacked on top of each other and now I essentially just need to copy this section multiple times so instead of making you watch me actually
46:07
typ this information out I'm just going to come in here and I'm going to copy it over for you because it's again exactly the same if I copy this down you can see
46:14
if I minimize it this is the exact same style and inside of here we just have footer link groups with each of our different links so if I give that a
46:20
quick save you can now see all of our links are showing up and when we shrink down to a smaller screen size you can see they stack vertically like this and
46:26
that just because we swapped everything to flex column on the smaller screen sizes so there we go that's our entire
46:31
homepage entirely done for our application and it looks relatively good obviously you can make different changes
46:37
to this and it looks a little bit zoomed in right now cuz my screen size is very zoomed in but on a more normal screen size this looks even better than it does
46:43
on this more zoomed in screen size now the next thing that I want to work on now that we're done with our homepage is to work on our sign in and sign out
Sign In/Sign Up Pages
46:49
workflow right now it works just fine but you'll notice in our URL bar it actually redirects us to a different site that's because we haven't set up
46:55
our own signin and sign out pages so we're going to do that next and with clerk it's incredibly easy to do all you
47:01
need to do is to create a folder for sign in and sign out and I'm actually going to put that inside of its own group called off again just to keep
47:08
things separated and so I can use a single layout file which we'll create now for both of our different off pages
47:14
so to create your own sign-in sign out workflows just create a folder called sign in make sure you spell signin
47:20
properly there we go and inside that folder you need to create another folder for a catch all so this is going to be
47:25
double brackets triple followed by the text sign in and again close that off with a double bracket and
47:32
then inside of here just create a page. TSX now you would think we have to write out a bunch of different code for
47:38
creating our own signin page but clerk has a component for us that we can use so we'll call this sign in just like
47:43
that make sure it's a default function and I'll call it signin page and that's because the component we're going to be
47:49
using is just called sign in all we have to do is just import that component and our signin page is entirely done now I'm
47:55
going to copy the exact same thing for sign up so make sure that we call this sign up just like that we're going to
48:01
name this to be sign up so it's the exact same thing but instead of sign in we use sign up let me just make sure I
48:07
restart my server that should hopefully fix that there we go and now inside of our sign up page we want to use the sign
48:14
up component from clerk so let's get that and rename this to sign up that's how easy it is to get working with that
48:21
now the only other thing I want to do is to create a layout so we're going to say default function and that's going to be
48:27
our sign or actually our off layout and to save us some time I'll
48:33
just copy the code over for this all we're doing is we're making sure it fills the full screen and it positions everything in the center as literally
48:40
the only thing that this does so now when we go to our signin page we should hopefully see that it's centered in the
48:45
page and it goes to our own URL but you'll notice it still goes to this clerk URL that's because we have one more step that we need to finalize and
48:51
this is telling clerk that we created these brand new sign-in Pages for it to use to do that all we need to do is go into our environment variables here
48:57
where we have our other clerk information I'm going to come down and we're going to paste in this next public
49:02
clerk signin URL and the same thing for sign up URL and point them to our new signin and sign up page that's all you
49:09
need to do so now when I click on the login button for our page give it a quick refresh everything works click on
49:14
login you can see it redirect me to my own Local Host 3000 things are much more zoomed in because I'm zoomed in on my
49:19
current page and you can see we're on our own URL which is really really great now a few more cleaning house things
49:25
that I want to do before we start working on our dashboard is you'll notice that we have a lot of environment variables it's hard to keep track of
49:30
these environment variables especially when you clone your code for a brand new time so I'm going to create a brand new file called env. example this is going
49:38
to be essentially a list of all of our different environment variables with sample values for anything that we can keep in there for example our sign in
49:44
and sign up URL we don't want to change that so we'll keep those in there but our secret keys that we have here we're going to keep those hidden so I'm going
49:50
to make sure that those are completely empty now when someone pulls down this code brand new they'll have this file to give them an overview of what our
49:56
different environment variables look like I'm also going to label this to say that this is our clerk environment variables and when we move to other
50:03
environment variables we'll put them in their own section I'm going to do the exact same thing inside of here put our clerk environment variable label so now
50:09
we know that these are all clerk related environment variables this just helps with people in the future downloading our application and using it so now
50:15
let's open up our dashboard and create a layout file for us to use we'll say layout TSX and we'll create a page and
Dashboard Navbar Design
50:21
this page for now we'll say default and that's going to be a function
50:27
dashbo page for now is just going to have nothing inside of it just so we have something there to render and then
50:33
here export default function and this is going to be our dashboard layout make
50:38
sure here that I spell layout properly and inside of this dashboard layout we're going to be getting our
50:45
children in here so we're going to say children and that is a react
50:50
node there we go and inside of here I want to create a div to wrap everything and that's going to have a background of
50:56
accent and that's going to be at that color five again opacity of five so it's very very faint but it makes it so that
51:02
white will really pop and we're going to make it so that it's at least always the same size of our screen that way that blue background covers our entire screen
51:09
now inside of here we're going to render out a Navar but we're not going to get the nav bar from our marketing folder instead we're going to create our own
51:15
nav bar specifically for our dashboard pages and then lastly I'm going to have a div that contains all of our different
51:21
children I'm going to give it the container class and some padding on the top and the bottom and we'll put our
51:26
children directly inside of there give that a quick save make sure I return this and now we at least have our dashboard and if we just comment out
51:33
this nav bar for now when we go to our dashboard for example slash dashboard and go enter you can see we just get
51:39
that blank page with that slight blue background now I'm going to go ahead and work on creating our nav bar next so let's comment this in and to do that I'm
51:46
just going to create a brand new folder underscore components and this is where we're going to put the components that are specific only to our private
51:53
dashboard pages so we'll come in here export function nav
51:59
bar this nav bar has no components that it takes in and we just want to render out a header kind of like we did before
52:06
inside of here we're going to have a nav and inside of here we're going to have a bunch of different links so the very first link I have is going to be for our
52:13
main page so we'll say class name that's going to go to our
52:18
dashboard there we go and it's going to make sure oops this should actually be our href not our class name there we go
52:25
and for our class name name this is going to be where we put our margin right on the auto so now
52:31
let's make sure we import our link just like that and inside of here we can put whatever we want and in our case we want
52:36
to put our brand logo again so let's just get our brand logo render that out and again let's go to our dashboard page
52:44
make sure I go to that page and you can now see hopefully at the top of our page if we make sure that we have this imported properly give that a quick save
52:51
you can see we get our logo at the top when we click on it it brings us to our dashboard page now obviously I want to style things so it looks a little better
52:57
so we're going to come in here make this a flex container py of four to give it some spacing again we'll give it a
53:03
shadow this will be a more neutral Shadow and we'll make it a background color of white essentially which is our
53:09
background right there also for our nav I'm going to make this have some Styles so we'll say class name here is going to
53:14
be Flex we're going to Center the items in here and we're going to give them a gap of 10 and finally I'm going to make
53:20
this a container just to give us some padding and make everything look a little bit better so now we have our first link let's move on to our next
53:26
link right here and this link is going to be for dashboard SL products and you can guess that this
53:33
will say products inside of it and we're just going to copy this down a couple times because we're going to have our
53:41
analytics and we're also going to have our subscription that we're going to manage Subs whoops subscription there we
53:49
go and then finally we want to be able to have a button for managing our user profile clerk makes this super easy by
53:54
giving us just a user button component we can import we don't need to do anything else just give that a save and now you can see we have this user button
54:00
over here just give it a refresh make sure it shows up properly and actually the reason that nothing is rendering over here is because right now I'm on
Private Route Setup
54:06
this page but I'm currently not signed in we don't have any authentication set up which is a huge problem so we need to
54:12
go over to our middleware and actually set up this authentication so inside this middleware this clerk middleware function is where we make sure we
54:18
protect the pages we want to protect so this function actually takes another function as an argument and in this
54:23
function that we're passing into it takes an off as well as our requ EST information so if we want we can call
54:28
off. Protect and what that's going to do is make it so that you must be signed in to view this page but we only want to
54:34
protect the pages that are private so to do that I'm going to actually create a variable called is public route this is
54:39
going to be a function just like this and I'm going to be using the create route matcher
54:45
function which comes directly from Clerk and this allows us to pass in essentially the same thing we pass this matcher down here and it's going to
54:52
match okay if this page is matched then it's going to be a public route versus not so just want to put in here a list
54:57
of all the pages that are public so our homepage is going to be public also our sign-in pages are public so we can say
55:03
sign in and by using this dot with a star inside parentheses this says anything that comes after signin also
55:10
counts so if we go to slash signin SL something else it'll still be marked as public now I want to do the exact same
55:16
thing for our sign up page so I'm going to come in here with sign up and then finally we're going to have an API for this application so I'm going to put our
55:23
API in here as public as well because that's how people show the banners on their particular pages so now we can use
55:29
this by saying if it is a public route or if it is not a public route sorry passing our request well if we don't
55:35
have a public route then we should probably protect that route so now if we've done that and we give our page a refresh over here we should see we get
55:41
redirected to the signin because we are on a page that is currently public so let's just go back to our actual Local
55:48
Host right here and what I want to do is I want to click that I want to log in or get started so we'll say get started for free because I need to sign up I'm going
55:54
to create an account using GitHub so we're going to use my GitHub account give that a quick sign in I've obviously already signed in before with GitHub so
56:00
it just worked perfectly out of the box but it redirected me to the homepage I want to redirect to the actual dashboard
56:06
I don't want to have to click on this link to get there I just want to be automatically redirected to that page luckily with clerk this is incredibly
56:12
easy and again it's just a couple environment variables so I'll paste these down for you you can see that they are the next public clerk sign in or
56:18
sign upore Force redirect URL and this is just saying redirect people to this page after they sign in or after they
56:25
sign up so now let's make sure we add those to our example environment variables as well so now if I just sign
56:31
out of my application I'm on this normal dashboard page and I click that I want to log in log in with GitHub and you can
56:36
see it's going to redirect me to the dashboard when I'm done signing in which is super great so now we have our authentication essentially ironed out we
56:42
really don't need to change anything at all the very next thing that I want to work on is to be able to get our database set up because we really can't
Database Setup
56:48
do anything on these dashboard Pages unless we have a database set up so to get our database set up we're going to
56:54
be using drizzle I absolutely love it and you'll see in this video especially how amazing drizzle is compared to
56:59
something like Prisma because of the flexibility we get so to get started with Drizzle we're going to be using it with neon which again they sponsor this
57:05
video they're amazing for database provider hosting all we need to do is copy over this code right here and we
57:10
need to paste it down to import all these different libraries then you can see down here we have the code right here that we need to import into a
57:16
particular file to get started with Drizzle so I'm just going to copy that code create a brand new folder called
57:21
drizzle and inside that I'm going to create a folder called db. TS which is where to paste in this code right here
57:27
and I just want to make sure I export the information I need so here I have this constant called DB I'm just going to export that from this file so that
57:34
gives me access to my database now I'm going to call this just my database URL just like this from my environment
57:40
variables so I'm going to come into my environment variables we'll create a section at the top here for our database
57:47
and we have a database URL we need to set it to some specific string also I want to make sure
57:53
I put this in my environment variable for the example file as well so people know they need a database URL now to get
57:58
a database URL we're just going to set things up on neon so I'm going to come over to Neon all we need to do is give our project a name we'll call this easy
58:05
PPP we're going to give our database a name easy PPP is fine and we're going to
58:11
say create this project just that easy you can see the really nice thing about neon is I have the ability to branch
58:16
which means I have my production database right here and I can create a development database just for me click this one button now I'm working on my
58:22
own production database now I'm going to just make this a full screen because this works better this way and what I
58:27
want to do is I want to actually connect to this particular database so the easiest way to do that is I could just copy over this string or I could come
58:34
over and I can make sure I'm doing this properly by going to this overview Tab and I click on this connect button right here for this particular database I want
58:40
to make sure that I'm on the branch that is correct I'm on the main branch I want to make sure I navigate to my Kyle
58:45
Branch here and then I click connect and I want to make sure I use a pulled connection the reason for this especially if you're dealing with
58:51
production is that if you have something that's going to be produced on the edge which neon is great for Edge databases
58:57
it's going to make it so that you actually have enough connections because a lot of times databases only allow you like five different connections and if
59:03
you're using something serverless on the edge you're possibly going to have hundreds or thousands of connections so this is just going to make sure that
59:08
your database will work flawlessly on the edge so we're just going to copy over this database URL and that's all we
59:13
need to do from neon to get this started and working so let's come over to here make this a little bit smaller so it's
59:18
easier to work with and paste down our database URL into here and now we should have everything we need to get started working you'll notice we have a little
59:24
bit of an error in here that's because this database URL could be undefined it doesn't know we could say you know what
59:30
I guarantee this is going to be a string typescript type this and that's going to work fine but if someone forgets to import their database URL they're going
59:36
to get a weird error because it doesn't have a database URL to connect to so I'm actually going to go ahead and I'm going
Type Safe Environment Variables
59:41
to set up a file for all of our environment variables and I'm going to do that using the T3 environment variable package so what we can do is we
59:47
can install this package npmi this is T3 environment DJs this is going to make
59:55
it really easy for for us to have type safe environment variables we also need to make sure we have Zod for this so I'm
1:00:00
going to npmi Zod as well to do all of our different validation so now that we have that done we can go ahead in our
1:00:06
data folder and I want to create a brand new folder for my environment variables and I'm going to have them for my client
1:00:11
and I'm also going to have them for my server just like that you can combine these together but I like to keep them
1:00:16
separate to be really distinct which one's are client and which one's our server now the documentation for getting this set up is incredibly easy to
1:00:22
understand and use all we need to do is export what we're going to put our environment variables in we're going to call this EnV and that's coming from
1:00:28
create EnV just like that and this takes in an object the first thing you want to Define is empty strings as undefined
1:00:34
that way if you pass in for example something that's completely blank it'll convert that to undefined which is probably what you want next we want to
1:00:41
Define what all of our server environment variables are since we're in our server. TS file so I have a database
1:00:47
URL just give it the exact same name you used before and then for our validation we know that this is a string and we
1:00:53
know it is a URL so let's make sure we import this from Zod just like that so we're saying this is a string from Zod
1:00:59
and the last thing we need to do import is going to be our runtime environment there's also an experimental runtime
1:01:04
environment which is what I'm going to be using because it allows you to just pass in process.env for all your server
1:01:10
environment variables and it'll hook up everything for you if you use the normal runtime you actually need to manually
1:01:15
say that our database URL is equal to process. env. database URL this is kind
1:01:21
of a clunky amount of code to write which is why I think it's much better to just use the experimental version like like this which works great for our
1:01:27
server now for our client it's going to be slightly different we're going to paste this in and instead of server this is going to say client here and every
1:01:34
single client variable obviously must start with next public underscore whatever our variable is going to be so
1:01:40
if we come into our environment variables we have all these different environment variables I'm going to copy them over so we know what the names are
1:01:46
come into here going to put them down just below so we have our clerk publishable key we know that this is
1:01:52
going to be a string just like that I'm going to copy this down to few times cuz we have all these other variables so we
1:01:58
have our redirects let me make sure I get those we have our sign up URL and our sign in url all of those are going
1:02:04
to be strings and they're all required now the unfortunate thing about the experimental runtime is you actually need to pass it in everything for your
1:02:11
client side code so I must say that for example my public key here is equal to
1:02:16
process EnV do and whatever I call that variable which is just the exact same name I need to do this manually for
1:02:23
every single one which is a bit of a pain so I'm just going to copy this down make this a little wider so it shows up on one line for you and I'm just going
1:02:30
to paste the correct names down for both of these there we go one more to go and
1:02:36
there we go that cleaned up all of our different errors so now we have everything hooked up for all of our different environment variables I just want to make sure I get my last
1:02:42
environment variable in here which I believe is called clerk secret key there we go clerk secret key and this one is a
1:02:49
string there we go that's everything we need so now we have type safe access to all of our environment variables so back
1:02:54
into here what I can do do instead of just getting my variable directly from process. EnV I can say EnV make sure I
1:03:00
get my server variables and now I have typesafe access to my database URL and if for some reason I don't include my
1:03:06
database URL I'm going to get an error when I try to run my application for example I'll just completely remove this and show you what I'm talking about give
1:03:12
this a quick save it's going to reload everything and now if I try to access anything in my application that uses that database URL it'll throw an error
1:03:19
now right now I'm not accessing my database URL but you would see myself get an error if I did try to access that
1:03:24
information for example if my Seeker key was empty then I would get an error when I tried to deal with logging in information and so on so like if I try
1:03:30
to sign out I may get an error if I try to log in I may get an error but again I'm not seeing any of these errors showing up because I'm not using those
1:03:37
particular variables but as soon as I use them you will see those errors now to finish our setup for drizzle we need to also create a new file called
Drizzle Setup
1:03:43
drizzle.
1:03:54
config.sys config I said my schema is in this folder I say all my migrations are going to go into a folder called
1:04:00
migrations in my Jal folder everything is going to be postgress strict true and verbose true just make it so when you do
1:04:05
migrations it's going to give you extra warnings and validation on what's going on and then finally I'm actually seeing my database credentials right here
1:04:11
inside of this so now I have all my stuff hooked up and again I'm using that environment variable that I created on the server so now we need to get started
1:04:18
with our database configuration which is all going to happen in this schema file so let's just go ahead and the first
1:04:23
thing I want to do is export a constant variable called Product table and we're going to set that to PG table just like
1:04:30
that from r o RM and then we can give it all the different names in columns so the first thing is we need to give it a
1:04:35
name we're going to call this products just like that and we're going to give all of our different columns inside of here so for example I'm going to have an
1:04:41
ID column with a uu ID set it to ID just like that and we're going to say we're going to have a primary key default that
1:04:48
to be a random uu ID also each of our products is going to be linked to a user so we'll give it a clerk user ID which
1:04:55
is going to be a text field clerk user ID and we'll set that equal to not
1:05:01
n there we go and make sure again that I import this text field directly from my
1:05:06
PG core because we're using postgress we need to use the PG core now there's a few other columns that I want to have
1:05:11
inside of here so I'm going to paste these down a name which is a text which is not null description which is a text that can be null and then a URL that
1:05:18
again cannot be null I'll even put it above my description so all our not null stuff is up there then I want to have a
1:05:23
created at and updated at but I'm going to put these on like every single field I have so what I'm going to do just going to copy these over again is I'm
1:05:29
going to create a variable called created at and updated at which are going to be timestamp variables and they're going to have a time zone
1:05:35
associated with them generally in postgress if you're dealing with timestamps you want to add a time zone in there it's not going to change your
1:05:41
database by taking up more space is just going to make it easier to work with your times in the future and again let's
1:05:46
make sure this is created at and updated at our created at field is not null and it defaults to whatever the current time
1:05:51
is whenever we add it same thing with updated at and whenever we updated it it converts the time to the actual current
1:05:57
date so it automatically updates that date field for us so now we have our product table completely done now the next thing I want to do on this table is
1:06:03
I actually want to add an index indexes are really important if you're working with data where you need to access data
1:06:08
based on specific fields for example I'm almost always going to be getting my products based on this clerk user ID so
1:06:14
where clerk user ID equals 1 2 3 and so on so I want to set up an index on this clerk user ID so that way it makes those
1:06:20
queries even quicker than before that's what indexes are useful for so here I'm going to say that I'm going have a clerk
1:06:26
user ID index I'm going to use the index property from the PG core I'm going to give it a name which is products. clerk
1:06:34
user ID index and then finally I want to say what table that's going to be on which is our table. clerk user ID so I'm
1:06:41
just setting up an index on that particular Row in our database to make our queries on our product table using
1:06:46
that row much quicker now the next table that I want to work on is going to be the customization table because I can customize what the banner looks like I
1:06:53
need to have a table for storing that information so I'm going to have a product customization table this is going to have an ID it's also going to
1:06:59
have a class prefix this is like what I put before my CSS and this is the only thing that I can have be null because I
1:07:05
can also not have a class prefix I need to have a product ID so that's not null and it's going to reference my product
1:07:11
table and by putting on delete of cascade that means what's going to happen is if I delete my product it's going to delete the customization
1:07:18
associated with that as well I also marked this as unique because each product can only have one customization
1:07:23
table for it so each product has one row in the customization table so by making this unique it enforces that actual
1:07:30
thing now the rest of this information is just all the different things that I can customize for example I can customize what my message is I can
1:07:35
customize background color text color font size Banner container and whether or not this is going to be sticky to the top of the page and for each of them I
1:07:42
gave them a default value so they all have default values so even if person does no customization they're going to
1:07:48
have something that will display on the screen with all these defaults and then finally are created at and updated at Fields down there now the next thing we
1:07:54
need to do with Drizzle is to set up a relation between our product and our product customization this will make doing certain queries much easier in the
1:08:00
future so we can export a const called Product relations and we can set that to
1:08:06
relations just like that again make sure we get that from the OM on our product table so these are going to be all the
1:08:11
associations for our product table and this is going to take in a function just like this and this function takes in two
1:08:18
parameters which is going to be either a one or a many so depending on if you have a one to one or a many to many or
1:08:24
many to one relationship you Define that using this right here and this is going to return to us an object so let me just
1:08:29
wrap this in some parenthesis there we go and the first thing I want to have is my product
1:08:35
customization just like that that is a one toone relationship where each one of these has one product customization so
1:08:41
I'm just saying my product table has one product customization in it and I call that product customization let me make
1:08:47
sure I got enough parentheses to close everything off and you can see that that works fine now I'm going to copy this down here and this is going to be for my
1:08:54
product customization relations there we go so product
1:08:59
customization relations this is on my product customization table and again I can
1:09:05
specify whether I have one to one or many to many in this case I only have a one: one relationship and I have one
1:09:11
product so this one product is on my product table and I also need to specify
1:09:17
a few different things because whichever table has the ID you need to specify a few other things on that relationship I
1:09:22
need to specify what the fields are so in my case I have a product customization table. product ID the
1:09:29
fields just references okay what field am I using for my foreign key in that case it's my product ID and then the
1:09:34
referencing section says okay what does this reference in the other table well this references my product table ID so
1:09:40
this just allows me to create really easy join queries between these two tables CU I know what the relation between them is now if we go back to my
1:09:46
homepage so we can look at the pricing section you may remember that specific tiers have different abilities for how
1:09:51
many times you can view the pricing page this is how many times the product can have Banner show up so we need a way to
1:09:57
be able to track how many times each page has been viewed and then also use that information for analytics so the
1:10:02
next table that I want to create is going to be the product view table and the product view table all that's going to do is it's going to be okay which
1:10:09
product am I viewing and which country am I viewing from which is a table we're going to create in a little bit and then when did I actually view that so this
1:10:15
when information is very useful for our actual analytics this country information is very useful for we
1:10:21
analytics again so we can see where is everyone coming from and then obviously the product is very very important so we can associate how many times has each
1:10:28
individual product been viewed so we can make sure we limit how many pricing page visits we have per month so that way we
1:10:33
can make sure people upgrade from the free tier and so on to earn us more money so as I mentioned this uses a country table so let's create a country
1:10:40
table here this is relatively straightforward all it has is a name and a code which again we're making sure that these are unique and we're giving
1:10:46
it a country group ID which allows us to group our different countries together because when we edit our coupon codes we
1:10:52
have the ability to view all the different groups for our coupon code so for for example all the people in the group with 20% purchase power versus 30%
1:10:59
versus 40% versus 50% if you remember that edit page where it had all the flags that's exactly what each group
1:11:04
represents so each country belongs to exactly one group so let's go ahead and we're going to create our group as well
1:11:10
so we're just going to paste that down into here and then finally that should be the last thing we need for getting all the different stuff for these tables
1:11:16
Associated so we have our country name code and group and our group all it has is a name and it has a recommended
1:11:21
discount percent this is just helping people that are starting up creating their first product they don't really know how much of a discount to give for
1:11:28
each different country so this says okay for these countries we recommend around a 50% discount or so on obviously they
1:11:34
can change it but this just helps make their life much easier so again we have our groups we have our countries we have
1:11:39
our product views and we have our customizations and our products now this still isn't nearly enough to get
1:11:44
everything done but now we can set up the relations between all of these different things for example on our
1:11:50
product we now have relations to other things namely we can have a bunch of different views for our product product
1:11:55
so we have a many relationship that's on our product views so there's many product views that are associated with
1:12:01
the product view table there we go now if we move down to our product view we need to create the relations for this as
1:12:07
well I'm just going to copy this over because it's relatively straightforward code we're creating a on toone relationship where it has one product
1:12:13
and one country and we're using these ID fields for those references then we can move on to our country which again is
1:12:19
very similar and rather straightforward you can see here our country is going to have a single country group group and it
1:12:25
can have many different views in our product view table finally we have our country group relationship which again
1:12:31
is going to be rather straightforward each country can have multiple different country groups now you'll notice in here we also have this section called country
1:12:37
group discount so the way that I've structured our database is we have a country and each country has a group
1:12:43
that it falls in so this is whether it's going to be parody purchasing group of like 2 to three or 3 to four or four to
1:12:48
5 and so on and then each of those groups we can give a specific discount code too in our application so that's
1:12:54
where this next table is going to come from it's going to be associating all of our different discounts for an individual group for an individual
1:13:01
product so here if we take a look at this particular table you can see that this table has a country group ID which
1:13:07
is going to reference our country group table it's going to have a product ID to reference our product table and then we have what our coupon code is as well as
1:13:13
what our discount percentage is going to be so this is where the individual user saves a particular coupon and a
1:13:19
particular discount percentage for a particular country group so this way if I want people in India and all other
1:13:25
countries in that group to have 30% off using the coupon India I can put all that information in here and save that
1:13:31
also I made sure that the primary key for this table is just my country group ID and my product ID because there's no
1:13:37
way that I can have multiple entries for a individual product and individual group ID I can only have one coupon code
1:13:43
and one discount percentage for this combination information so it made sense to make this my primary key I can also
1:13:48
go ahead and set up My Relations so as you can see here my group discount relations is going to have one product and it's going to have one country group
1:13:55
again based on these particular IDs I also can modify our product relation at the very top of our page because now we
1:14:00
have another many to many relationship that I need to De with and this is my country group discounts which is going
1:14:06
to be a manyu relation on my country group discount table now the final table
1:14:11
that I need to add to my database is going to be for handling my subscription so are they on the free tier the basic plan standard premium and so on I need
1:14:18
all of that inside of its own table so this table right here has a clerk user ID so I can associate it with an
1:14:24
individual user it's going to have information related to stripee so I'm going to have the stripe subscription item the subscription ID and the
1:14:30
customer ID this makes it so that I can let the user change their subscription between different tiers without making
1:14:35
them have to sign up for multiple subscriptions it'll automatically change one subscription to the next without like canceling or restarting it's
1:14:41
important that you store all this information for subscriptions then we have the tier that they're going to be in which is going to be an enum I'll
1:14:47
create in just a second so for example are they the standard the premium the basic or so on and then I have a few
1:14:52
different indexes again to make my queries easier because I'm always going to be creating this table based on either the user or the stripe index so
1:14:59
that's why I have those different tiers now let's create that index or that tier so we're going to say cons tier enum
1:15:06
equals and that's using PG enum just like that and we're going to call this tier and what I want to do for this is I
1:15:13
want to get it based on all of my different subscription tiers so I have my subscription tiers just like this but
1:15:18
I want to get just the keys so we're going to say object. keys just like that that's going to give me all of my
1:15:23
different keys for this particular your user but this is just going to be an array of strings it doesn't know
1:15:28
typescript isn't smart enough to know that this is specifically just the names of my tiers so I need to say that this
1:15:34
is actually going to be an array of tier names so to do that I'm going to create this tier names type so we'll say up
1:15:40
here type tier names is going to be equal to all we're going to do is take the type of my subscription tiers and I
1:15:47
want to get the keys of that so now if I hover over this tier names you can see it's free basic standard or premium so
1:15:54
let's export that type just like that and now inside of here if I import that tier names that's
1:16:00
smart enough for postgress to now know and drizzle to know that hey I have this information if I hover over this tier
1:16:05
enum you can see it's either free basic standard or premium and that is absolutely everything set up for my database now I know I went through this
1:16:11
rather quickly but that's because it's a lot of typing of code and overall the important thing is to get the high level of how the database works so I'm going
1:16:18
to go through that real quick first a user can create a product and this product has the ability to be customized
1:16:23
through our product customization table and we have the ability to have specific discounts associated with that product
1:16:29
using our country group discount table now we only can put discounts for individual country groups so instead of
1:16:35
putting a discount per country itself we put a discount for each group of countries so that's why we have this
1:16:40
country group table and this country table to make sure we track okay which group is each country in and we can
1:16:46
easily change what group a country is in based on how the economy in that country changes over time for example if India
1:16:52
all of a sudden gains a lot of wealth and a lot of purch in power for individuals increases in India India may
1:16:57
move to a different pricing tier and nobody in our application needs to do anything we can just move that country
1:17:03
from one tier to another and it's automatically going to work everywhere else now we also have a table for tracking how many times a product has
1:17:10
been viewed which allows us to make sure that we're not showing the product more than they're paying for and we can show different analytics to our user finally
1:17:17
at the very bottom we have the ability to store which tier a user subscribed to so that way we know are they on the free
1:17:22
tier the basic tier the standard tier and so on so we can give them different permissions and allow them to use different things in our application
1:17:27
based on what tier they're a part of so now once we have our schema entirely done we can go back to this drizzle file here and we need to make sure that we
1:17:34
pass along our schema into this particular section of drizzle so let's import Star as schema from our schema
1:17:43
file this is just going to make sure that drizzle knows what our schema looks like so we can do something like dbquery
1:17:48
Dot and it's going to give us all the different tables we've created and it allows us to do all the different relationships between them and so on
1:17:54
it's really important that you do this otherwise you won't get any type safety now to work with Drizzle we need to run a few different commands so what I'm
1:18:00
going to do is actually go into my package Json and I'm going to create a script for all the different commands we need to run I'm just going to paste this
1:18:06
down here we go we have our DB generate command which is going to run drizal kit generate we have a migrate command to
1:18:11
run migrate and we have a studio command to run Studio the generate command will generate migration files for us so now
1:18:16
that we've changed our schema we should probably create those migration files npm run DB
1:18:22
generate there we go give that a quick second to run and we should see it's going to run and if we look over into
1:18:27
our DB folder you can see we have this migration folder and in here this is all of the SQL code that needs to run to
1:18:33
create our entire database and every time we make changes We'll add a new file to that Migration by using the
1:18:38
generate command now we can use the migrate command to actually push those changes up to our database so now that
1:18:44
we have our database URL we're actually pushing those changes to our database and now if I go to Neon and I look at
1:18:49
all the tables for our particular database you can see we have a table for all of the different things that we've created inside of our application so now
1:18:56
we've actually connected our database with the changes that we just made using that migrate command the last thing is
1:19:01
the studio command and this just allows us to actually view our application from our Local Host if we really want to if I
1:19:07
open this up you can see that now we can view inside of here essentially the same thing we can view inside a neon all of
1:19:13
the different rows in our database there's no information in there right now so we can just close out of that now even before we start working on more
Clerk Webhooks
1:19:19
information for our dashboard I want to make sure all of our users have a subscription tier as soon as they sign up because because we have this free
1:19:25
tier I want to associate someone with a free tier as soon as they sign up for our application and clerk makes this really easy to do if we go back over to
1:19:32
clerk we actually have the ability to configure different things inside of our application I'll make this a little bit larger click on configure and if we
1:19:38
scroll down we have this web hook section this web hook section allows us to actually run specific code in our
1:19:43
application when certain things happen such as creating a user so let's add in an endpoint we need to give this a
1:19:49
particular URL and then we can associate it with specific events such as user created that's the only one we really
1:19:54
care about you can also make sure when the users are deleted that you do certain things in your application and so on but for ours we're just going to
1:20:00
deal with user created for now actually let's go ahead and do user deleted while we're at it might as well now to make sure we understand how everything in
1:20:07
here works we can go up to this view doc section that's going to open up the documentation for this and if we scroll
1:20:12
all the way down it's actually going to tell you exactly what each of these web hooks looks like and it's going to tell you how everything works and most
1:20:17
importantly it's going to give you the code to actually implement this inside of your own application so this section
1:20:22
for sync data to your database if we click here this is going to give us a step-by-step guide on exactly what we need to do first we need to actually
1:20:29
expose our application to the Internet so that we can hook up to it with clerk they tell you to use endro but if you're
1:20:34
using vs code the ability to port forward is built into vs code click on ports and click forward a port and just
1:20:40
type in your port for ours it's going to be Port 3000 this is going to set up a forwarded address and we need to make
1:20:46
sure we set the visibility to public so that way clerk can access this information then all we need to do is just copy that address and inside of
1:20:53
clerk where we need to set up the endpoint you URL copy in that address this is how they're going to connect to our application then what we need to do
1:20:59
inside of clerk if we come back over to here is this going to tell us exactly what to create so first create the endpoint in our clerk dashboard that's
1:21:05
what we're going through right now so inside of here let's go ahead and just click create since we have our events that we want to listen for and that's
1:21:11
going to give us a bunch of information most importantly our signing secret so let's go ahead and we're going to copy that over this is our web hook secret
1:21:17
for clerk so in our environment variables we need to make sure that we add that information in so we'll call this clerk web hook Secret
1:21:25
there we go I'm going to copy that over into our example as well and then also
1:21:30
since we're using this as an environment variable that needs to be inside of here as well that is our clerk web hook secret which is a z. string there we go
1:21:38
that's all we need to do to get our environment variable hooked up back to our documentation on what to do next we need to add that signing secret we
1:21:44
already did that so that's already done and then finally we can set up a web hook route inside of our middleware so make sure that that is public we've
1:21:50
already done that inside of our middleware because if we go to our middleware file and we open this up you can see our API is currently public and
1:21:57
that's where our web Hook is going to lay so we already know that that is public finally we need to install this SV Library this is how they actually do
1:22:05
the communication to verify everything is coming from Clerk and then finally we just need to create the endpoint for it
1:22:11
and put this exact code inside there so I'm going to copy this code over and I'm going to create an endpoint inside of that API route so inside of here create
1:22:18
an API folder and inside of that API folder I'm going to put a folder specifically for handling all of my web
1:22:23
Hooks and I'm going to create a folder specifically for clerk so in here route. TS and we can paste in all of the code
1:22:30
that it gives us this is what we need to run and it literally is essentially as simple as that now I'm going to clean up this code slightly so the very first
1:22:36
thing I'm going to do is I'm going to take all this stuff for getting all of our different headers I'm going to paste in my own code version of that so you
1:22:42
can see we're getting our headers and we're getting the information specifically related to svix and we can check if any of this information is not
1:22:49
there we're going to return an error down to the user so at least we know that we have all the information that we need the next thing I need to do is to
1:22:55
be able to get the information for the payload this is like all the Json information for our new user being passed up to us and then we can get our
1:23:02
web hook secret which is our EnV dot make sure I import EnV from the server version there we go and this is going to
1:23:08
be our clerk web hook secret so we're going to be passing that directly into here and that's going to give us back an event I'm going to rename this to event
1:23:15
just to make it a little easier to work with there we go it's a little more descriptive that way so we've created our web hook we've created our event now
1:23:21
what we're doing is we're verifying that all of our information is correct and I've rened these variables to be a little bit more you know JavaScript
1:23:27
focused by making them camel case like that so now we have verified based on our headers we're verifying okay does
1:23:33
this body correctly signatured by this svx Library it's just making sure that other people don't post information to
1:23:39
this and it guarantees all this information is coming directly from clerk so then the next thing we need to do is way down here we can set up a
1:23:45
simple switch statement so we're going to say switch on event. type and now we can say you know what in the case that
1:23:51
we have a user created I want to run some specific specific set of code so inside of here this is going to be user
1:23:58
created and I can access that event by saying event. dat. I get all the
1:24:03
information from my new user such as the ID of the user which is really all I care about so now let's go ahead and write the code to create this user
1:24:09
subscription so we can access our database by saying DB Dot and we can do an insert statement on our user
1:24:14
subscription table what I want to do is I want to insert the values so for my data inside of here you can see we have
1:24:20
our clerk user ID and our tier that are the only required things so our clerk user ID is our event. data. ID then what
1:24:27
we can do is we can pass in the tier and by default we want to sign them up for the free tier so that's all we need to
1:24:32
do to actually give the values that we're inserting into our database we obviously want to await this to make sure that it runs but that's literally
1:24:38
all we need to do to add a user to our database once that's done we can just add in a break statement here make sure occurred is spelled correctly and that's
1:24:45
it so pretty much all this code is directly from the clerk documentation and that is actually going to run every time we create a brand new user now I've
1:24:52
already created my user so what I'm going to do is I'm going to delete my user so we can go over to our dashboard real quick click on my user here click
1:24:59
on manage account and I want to just delete this account so we'll say delete account there we go now we're back onto
1:25:05
this page and I can do a quick login and sign up for a user so we'll click sign up I want to sign up with GitHub give
1:25:11
that a quick second and you can see that now we've actually signed in with GitHub and it should have called out to our API
1:25:16
to actually connect and create a brand new user Force as you can see it's already made get request to all that
1:25:21
made a get request to here but I don't think it actually made our post post request what we can do is we can go over to our dashboard to check to see if this
1:25:28
is working in our endpoint so in our overview for our endpoint we can click on our endpoint itself click on this one
1:25:34
and you can see no messages were received or sent but you can see right here actually there was two succeeded messages for user created and user
1:25:41
deleted so it was actually properly sending information over so let's check our neon console to see if we have a user subscription and it looks like we
1:25:47
don't have a user subscription being created so let's make sure that everything is working as we expected to we can minimize this down a little bit
1:25:54
we can put a console log inside of here that just says hi so we know that we're hitting this particular endpoint and
1:26:00
what we can do is we can actually call this replay function which is just going to resend this message for us so we'll come in here click resend and that is
1:26:07
going to resend this and you can see it did make a post request but it went to post slash that's because I didn't actually add in my apiweb hooks SL clerk
1:26:17
there we go so I'm making sure I call the correct endpoint now let's try retrying that again we should hopefully see if we do that retry properly it
1:26:23
should actually log out high you can see it's compiling that page and it looks like we're getting high being logged out
1:26:29
we are getting some warnings but we can pretty much ignore but we should see in our database if we refresh that we now have a row inside of our table and we do
1:26:36
and if we scroll over you can see that they should be set to the free tier which they are so this is working really
1:26:41
really well so now every time a user is created we actually have them being hooked up to a particular tier so now I
1:26:47
should be able to have that free tier on this user account and I can do different verification now before we dive into that I want to do a huge thing that's
IMPORTANT: Database Clean Code
1:26:53
going to massively clean up our code it's really easy when you're working with a database to just write a bunch of DB statements all over your application
1:27:00
and then all of a sudden you realize that your database code is literally everywhere scattered throughout all of your application it's difficult to track
1:27:06
what's going on to fix errors and so on so what I want to do is I want to create a brand new section in our application
1:27:11
for only storing database related queries so I'm going to put a server folder for all of our server related
1:27:16
code and inside of here I'm going to create a database folder now in this database folder I'm going to create a bunch of different files for all the
1:27:22
database interactions we can do for example anytime I want to deal with a subscription it's going to be in this subscription. TS file and now I can
1:27:30
create a function that's going to create a user subscription so I can export a function called create user
1:27:37
subscription just like that and it's going to take in whatever data is related to creating this so to easily
1:27:43
get that we can just say type of that's going to be coming from our user subscription table Dot and we can just
1:27:49
use the infer insert that's going to essentially say that this data is whatever we can insert into our particular table then we can just do our
1:27:56
database call so I'm going to come back to here I'm going to take this entire database call copy that out of here I'm
1:28:02
going to paste that directly into here and we're just going to return that for now we'll say DB just like that and this
1:28:07
is going to be taken in all of our data so we're just going to pass in our data as our values so now this is where we do our create we can come back into here
1:28:14
and what I want to do is I want to call that create function just like this pass it in this information and now my
1:28:20
database information is being stored in this one file so every time I want to deal with a subscription in my database
1:28:25
I can write the code in this file and I can reuse it everywhere in my application and I can even make sure I get rid of all these different Imports I
1:28:32
don't need and you should see if you do this that the database file is never imported anywhere except for inside this
1:28:38
DB folder that makes your code much easier to clean and if you ever want to change from drizzle to prismo or
1:28:43
something else you can just change these one set of files and that's going to do all the changes for you throughout your entire application this is a must-have
1:28:49
on any larger scale application you may not think this is as important it is but I guarantee you once we start dealing with caching and other more complicated
1:28:56
database queries you're going to see how amazing this is now one thing I want to do is on this if there's a conflict I
1:29:02
want to do nothing so if for example I try to insert a user into the table that already exists I'm going to make sure
1:29:07
that we don't do anything so anytime that the clerk user ID already exist on my table I'm just going to do nothing at
1:29:12
all this is really important to have in cases where like I replay this again so if I come back into my clerk dashboard
1:29:18
and I were to like replay this user created event a second time and I already had information in my database it doesn't reset that information or
1:29:24
throw error it just says okay you know what they already have a subscription just completely ignore that now in order to handle deleting as well since I
Finish Clerk Webhooks
1:29:30
mentioned that we're going to do that let's go back into our route for that web hook and I want to be able to have another check here so we'll put in a
1:29:37
case this one's going to be user. deleted and inside of here I just want to do a bunch of deleting so we're just
1:29:43
going to call a function called delete user just like that and we'll pass it in my event. dat dot this is going to be
1:29:50
the deleted users ID which should just be ID now it does say that this ID field could be undefined so we'll just say if
1:29:57
the event. data. ID is equal to null well then we just want to essentially ignore everything so we'll just come in
1:30:04
here and if it's not equal to null then we want to do this delete user function and this again is going to be coming
1:30:10
from that DB folder so inside of here let's create one for users. TS and I'm going to export a function called delete
1:30:17
user which takes in a user ID so we're going to say clerk user ID which is a
1:30:23
string and now we just need to delete everything from our database that's associated with that user so we can come
1:30:28
in here and we can say DB and we want to do a delete statement and we want to delete from our user subscription table
1:30:34
so we're going to say user subscription table where and we want to do it where the particular ID is so we can say where
1:30:42
equals clerk whoops user subscription table. clerk user ID is equal to our
1:30:48
clerk user ID so first of all we're going to do this delete function and I want to do all these inside of a batch
1:30:53
so say DB batch and what that's going to do is it's going to make sure it runs all of these one after the other and if any of them fail it's going to roll back
1:31:00
the entire thing so first of all we're going to do this delete make sure I put this inside of an
1:31:06
array there we go so we're going to do our delete for our users in the subscription section then after that
1:31:12
we're going to do a delete and this time we want to do it for our product table so we'll say product table where and we
1:31:19
want to do the exact same wear Clause I'm just going to copy that over and I'm want to make sure that this is for
1:31:24
our product table and let me make sure I capitalize that there we go product table and that's all we need to do
1:31:30
because our clerk user is only associated with products and it's only associated with a user subscription and
1:31:35
the really nice thing about doing it this way with all of our on delete Cascades that we set up is in our database if we look back at that file in
1:31:42
our schema we set up a bunch of on delete Cascade so if I just scroll up a little wage you'll see that whenever we
1:31:47
delete for example a product it's going to delete all the country group discounts associated with them and so on so anytime we delete something it's
1:31:53
going to make sure it does that cascading for us so to be able to delete a user all we need to do is do this and we can just return this so we can make
1:32:00
sure we can await it back into here so delete user there we go so now when we delete a
1:32:05
user it gets rid of all their information from our database and we can really easily test this by just coming into here and I'm going to delete this
1:32:11
particular user account so come over to Security delete account whoops make sure I spelled that
1:32:18
properly click enter you can see it didn't look like any errors were thrown if I go over to our neon database we should see that there's no longer any
1:32:24
subscriptions when I refresh the page give that a quick step and you can see our subscription has been removed so it properly deleted everything and now if I
1:32:31
were to log in and sign up with my account it'll recreate that subscription for us so we have deleting and creating
1:32:37
users hooked up properly now when we start dealing with stripe we're going to need to come in here with like a to-do that says remove stripe
1:32:45
subscription so if they are on a stripe subscription we'll want to make sure that we cancel that but otherwise we should be good to go now up until this
1:32:51
point we've done a lot of work for our application to essentially be a blank page but this has been a lot of groundwork which is going to make moving
1:32:57
forward with the rest of our application so much easier so inside of our dashboard we can work on this main page
Dashboard Home Page
1:33:02
right here so the very first thing I want to do is I want to render out a few of the products that I have so as a user I want to get a specific number of
1:33:09
products so I can say const products is equal to and I can say await get products which is a function we're going
1:33:15
to create in that database folder so we'll say get products based on a user ID so export this as an async function
1:33:21
now to get my user ID I can just say const user ID is equal to a waiting off
1:33:29
just like that this comes directly from Clerk and gives us essentially the user ID and we actually don't need to await that because this isn't asynchronous it
1:33:35
just gets it directly from essentially a local storage JWT so it's really quick and super easy we get the user ID and
1:33:42
technically this user ID comes back as string or null we know that we're on a private page so we know that this is
1:33:47
going to be non- null so what we could do is we could put an exclamation point here that tells typescript that this can't be null but I prefer to do is just
1:33:55
to do a check at the top of our page if the user is equal to null then we can just redirect them to the signin page
1:34:00
which is something that comes directly from here so redirect to signin we can just call that function right here the
1:34:06
reason that I like to do this instead of forcing typescript to say that it could be not null is just because it's going
1:34:12
to make sure that my user ID is now set to not null everywhere in this file so I don't have to manually type it everywhere and it's going to make sure
1:34:18
that if I accidentally access this off on a non-private page that it's going to make sure it fails safely for the user
1:34:24
that is required so here we're getting our products so let's create this get products function so we're going to go back into that DB folder create a new
1:34:30
file called products. TS and we want to export a function called git
1:34:36
products now this is a relatively simple function it takes in our clerk user ID
1:34:42
which is a string and then all we need to do is just return Calling whoops return Calling DB do query and this
1:34:51
query is really nice because we can query on the product table and we can find many so it gives us that really nice syntax that you're used to with
1:34:57
Prisma and that's because we set up all of our relations in drizzle so we can say we got to do a where and we want to
1:35:03
do it where our clerk user ID column which we'll just call clerk user ID call
1:35:11
and we want to check for equality this is actually going to be a function so let me make sure I wrap that in
1:35:16
parameters here and what I can do is just call that equal function pass it in my clerk user
1:35:23
ID column and my clerk user ID and boom that works now I'm going to clean this up a little by calling this user ID that
1:35:29
way I don't need to rename this file or this column and we can just say user ID just like that so now all I'm doing is
1:35:35
just saying hey give me all the products where the user ID matches this user ID and I also want to order them so I'm
1:35:41
going to say order by and in this case we're going to have our properties inside of there this is a function I
1:35:48
want to get the clerk user ID and I want to order them in descending order so I'm going to say descending order and this
1:35:54
should be actually created at there we go so I'm going to order them by that created at field perfect now for our
1:36:01
particular page I want to limit how many things I get back so right now if I import this everything will work but I want to limit this to like six so I want
1:36:07
to say limit of six and in my get products I can make sure I take in a limit so we're going to say we're going
1:36:12
to take in a limit and this is a limit that is optional and it's going to be a
1:36:17
number so now I can just pass that along here because this query takes a limit so like I could pass along a limit of 10 or
1:36:23
can just use the limit we pass in so now it's going to give us only six or it'll give us all of them if we don't pass along any limit so now you can see we
1:36:30
have our products and we can print out any information we want about our products so the very first thing I want to do is to make sure we have products
1:36:36
so I can say here if our products. length is equal to zero then I want to
1:36:41
return a component I'm going to call no products because if we have no products I obviously can't render out the rest of
1:36:47
our page so this no products component is something that I'm going to create it's going to be something only I use on these private pages so we'll say no
1:36:53
product . TSX now this component is going to be a rather simple component we'll take a look at the code real quick
1:36:58
you can see here I just have a ton of margin on the top and I'm centering all my text then I have an H1 that's rather
1:37:03
large that just says you have no products and then finally I have a section that says hey get started by creating your first product and a link
1:37:09
that Lings us to the actual add product page so if I give that a quick save give this a refresh make sure that I import
1:37:15
this no products component we should hopefully see on our main page that it says you have no products get started by
1:37:20
creating a product and this will bring us to the product/ new page which we have not created yet now we should probably go ahead and create a page for
New Products Form
1:37:27
creating brand new products so what we can do is we come over to here we can say inside of our dashboard we're going to create a products folder and inside
1:37:34
of here we're going to create a new folder and we'll create a page. txx directly inside of there so export a
1:37:40
function new product page there we go and to emulate essentially as close as
1:37:45
we can what this parody deal site looks like we can come into here and log in and once I log in and navigate to a page
1:37:51
you can see that this is essentially what the create page looks like I'll even click create we want to create one of these and you can see it has this
1:37:56
back button a title and then a card with all the different information we want to associate with this thing so I want to create this like back button style card
1:38:03
that we're going to put on our page and that's going to be a component we can use lots of different places so I'm going to put it in this components
1:38:09
folder we'll say page with back button make sure I capitalize button. TSX and
1:38:16
we'll make sure we export a function page with back button now for this particular
1:38:23
page we're going to have a few different props that we pass in the props we're going to be passing in is the hre for our back button we're going to be
1:38:29
passing in the title for our page that's that section that goes up here and then finally all the children which is everything else we render on our page
1:38:36
now to give it this really distinct two column layout we're going to be using grid for that so we can come in here with a div class name of grid we're
1:38:43
going to say the grid columns are going to be Auto and 1fr that way the left column is as small as possible while our
1:38:49
right column is as large as possible then we're going to say a gap in the X direction is going to be four and our
1:38:56
Gap in the y direction is going to be eight to space out our top and bottom from our left and right a little bit more then we're going to come in here
1:39:02
and style what the actual icon is going to look like on the left side this is going to be simply a button that we're
1:39:07
going to render out as child and that's because it's going to have a link directly inside of it and that link is
1:39:12
going to go to our back button href and inside of here it's going to have essentially two different things first
1:39:18
of all it's going to have the text back which we're going to give a screen reader only so that way anyone on screen
1:39:23
reader knows that this is our back button otherwise it's going to have a carrot left icon which will give a class
1:39:30
name of size 8 to give it a nice and large back button Arrow make sure I close that off and make sure I import
1:39:37
button just like that give that a quick little save and before we do anything else we can test to see if this is
1:39:43
working like we expected to so we're going to go into our new product page here I want to return our page with back
1:39:49
button just like that close that off we're going to say this is our inner content and our back button hre is just
1:39:57
going to go to our products page there we go that's going to be dashboard SL products so now we don't have all the
1:40:04
components passed along that's fine we can click add product and we can see if this brings us to the right page looks like we need to make sure we export this
1:40:10
as a default function I always forget to do that there we go now you can see it looks like nothing's quite rendering
1:40:15
right now let's go back to this page with back button and make sure we're rendering out our children as well and to make sure obviously that we're
1:40:21
returning this content so let's give that a quick return you can see we have our back button showing up let's give it
1:40:27
a bunch of styles to make it look a little bit better so first of all we can change the size on this to Icon that's
1:40:32
going to make it more of a square shape so as you can see we now get that square shaped icon I want this to be rounded though so I'm going to say rounded full
1:40:38
that's going to give it rounded style and I want this to have a variant which is going to be outline just like that
1:40:44
now by default this outline variant gives us our accent color when we hover it I don't really like that so we're going to modify what that outline
1:40:50
variant looks like so here on our outline when we hover instead of giving it this accent I'm going to give it the muted color and same thing here this is
1:40:56
going to be our muted color so now when I hover you can see it gives me that gray color instead of giving me that blue color which I think looks a little
1:41:02
bit better in this particular scenario now we can come back to here and finish off what the rest of this page is going to look like CU now we have our button
1:41:09
section the next thing to work on is our title which is going to be inside of an H1 that's our page title and then
1:41:15
finally the next thing that we're going to have is going to be our children so that's going to be in our div that's going to say children just like that now
1:41:22
if we give that a save and we make sure that we pass along a page title so we'll say page title equals new product
1:41:29
doesn't really matter you can see we have new product and we have our text but this text is in the wrong position and this title does not look super great
1:41:35
so let's clean that up go back to our page with back button first of all we'll work on our title we'll make the text much larger 2 XL we'll probably do we'll
1:41:42
make it a semi bold font and we'll make it so that it's in the center of the page there we go and this is actually
1:41:48
centering it vertically so if we remove that you can see it's up a little bit and when we add that it's centered perfectly with this button now for our
1:41:55
children to make them in the right section we can say our column is going to start in the second row and that's going to make sure it starts over on
1:42:01
this right hand side instead of on the left hand side and that's all we need to do to get this entire page with a back button working and when I click back it
1:42:08
brings me back to my products page which we don't actually have yet so that's why it's giving me a 404 but we at least know that that is working like we want
1:42:14
it to so let's go ahead in here we'll change this to create product and now we can work on this intersection which I'm just going to be using a card for so
1:42:20
we'll import card we're going to have a card header and inside there we're going to have a card title and inside that
1:42:27
title we're just going to say product details and I want to make sure I change the class on this to be a text of large
1:42:34
because I want it to be really large actually let's make it extra large there we go we have our product details finally after our header we're going to
1:42:39
do our content card content and this is going to be our product details form
1:42:45
which is a form we're going to create for all the different details so over here you know be like things like name description URL so on so for our form
1:42:51
this is going to be something that we're going to put inside this components folder and I'm actually going to create a separate folder specifically for dealing with forms and inside of here
1:42:59
I'll create a file we'll call product details form. TSX now to work with this
1:43:05
we'll just export a function product details form make sure I actually spell
1:43:12
all this properly there we go return n for now we need to import a
1:43:18
bunch of components from Shad CN to get this to work so let's come into here we're going to go down import a bunch of
1:43:23
components we're going to say npx Shad CN at latest we want to add and we want
1:43:29
to add the form component the input component the text area component and we
1:43:34
also want to deal with toast so we're going to add in the toast component as well give that click enter right there and that should import all the
1:43:40
components we need but it looks like I spelled text area wrong so let me just make sure I get that spelled properly
1:43:45
and now let's try that again it should import all of our different components give it a quick second it's asking us if we want to overwrite button obviously we
1:43:52
do not so we will not overwrite that and now we have all the different components imported that we need to be able to work on creating this particular form now
1:43:58
creating a Shad CN form is really not too complicated once you know how all the different parts work first we need
1:44:03
to get our form and this is coming from the use form hook and this is a hook that's part of a react hook form so we
1:44:09
can import use form from react hook form just like that and this use form Hook is
1:44:15
going to take a type for what type of thing we're importing so this is actually coming from Zod since we're going to be using Zod for actual schema
1:44:22
definitions so we'll a z. infer type of and we want to specify what my schema is this is my product details schema and
1:44:30
this is something that we need to Define so I'm going to come up here and we'll say const product details schema equals
1:44:38
and we can say like Z doob and let's just say it's an object that has a name
1:44:43
which is a string there we go that's all this is going to do so what we have right here is we're importing that
1:44:49
particular thing as our type and now to make sure that we hook everything up to make sure it does type check checking we can say resolver and we're going to make
1:44:55
sure we're using the Zod resolver function this is a function that we can import whoops import Zod resolver from
1:45:03
and that comes from at hook form resolvers just like that now we have our Zod resolver and we need to make sure we
1:45:09
get it from the SL Zod portion of that now we can pass in our schema which is our product details schema and then
1:45:16
finally we can specify any default values that we have in our case we don't have any default values so we'll just
1:45:21
put in an empty object for example we just don't have any defaults at all since we have no defaults let's just leave that off for now so now we have
1:45:28
our form created and we're using that Zod schema and right now the only thing in that schema is our name so once we
1:45:33
have a form created the next step is to work on actually creating the jsx for our form so we can use the form
1:45:38
component from react hook form close off that form component and inside the form component we need to put our very own
1:45:45
form and we need to also make sure we pass along all the information from our react hook form form so here we can say
1:45:52
form just like that and what that's doing is it's taking this form and hooking it up to all the schema related
1:45:57
information I have up here and using that for our actual normal form and inside the form we need to make sure we
1:46:03
hook up our onsubmit and this is going to be calling form. handlesubmit and we can pass in our own on submit function
1:46:09
so this function called on submit this function right here is going to take in all of my values and the
1:46:16
values is just going to be the type of whatever our schema is expecting so this values right now is just a name that is
1:46:22
a string so we can come in here and now we can do whatever we want with these particular values for now I'm just going to log
1:46:28
them out to the screen now we can also do some styling on our form this is purely just visual I'm just going to make it a flex with a gap of six and
1:46:35
flex column just to make our form have some spacing between things and then we can specify that we want to create a
1:46:40
form field now this is coming directly from Shad CN so we can say form field
1:46:46
want to make sure that I import this so let's just close that off let's try to do an import looks like it's not Auto
1:46:52
importing so I'll just manually import form field from and that's going to be
1:46:58
at slui actually components uiform and it
1:47:03
looks like it did not import our form components they are there actually they're in our source components UI
1:47:08
folder let me see exactly why they're not working so if we come over to here they are right in there I may just need
1:47:14
to refresh some things on my page actually it looks like maybe that is now working we just need to pass along all of our Fields so for the form field we
1:47:21
need to pass along a few things first of all our control this is what Hooks up our form to the actual form field so our
1:47:26
form control goes into our form field the next step is the name and this name property is types save our only thing we
1:47:32
have is name so we're going to set our name to name obviously this can be whatever you want for example if I had description in
1:47:39
here which is a z. string as well description there we go I could change
1:47:46
this to be description or name so we're just going to do it as name for now and then the final thing that we need to
1:47:52
pass along here is our our render prop and this is just telling us what we want to render in this form field so this is going to be a function that takes along
1:47:58
all of our Field properties and it's going to give us something we want to render so with shad CN it's really easy
1:48:03
to do because we have a form item that we can pass in this form item will give a class name of flex grow just because
1:48:09
I'm going to put it in a container in a second here I might as well just do that now so we'll say we have a div with a
1:48:14
class name of grid and a gap of six and grid calls of one and large
1:48:21
grid calls of two there we go so this is just going to allow me to put two form inputs side
1:48:27
by side so I actually don't even need the flex SC on this because it's inside of a grid container so inside the form
1:48:32
item we then specify a form label there we go and inside the label
1:48:37
you can put whatever you want for example it's going to be the name of our product we'll specifically call it product name just like that then after
1:48:43
our form label we're going to have a form control and this is where you put your input so in our case we can just
1:48:49
put an input field like our text input so let's make sure I spell input correctly just like that and I want to
1:48:55
make sure I close that off and I want to pass along all of my field related information and again make sure I import
1:49:02
input correctly looks like I need to manually import that again import input
1:49:08
from and that is going to be at components slui
1:49:14
input there we go now we scroll all the way down here we looks like all of our errors are cleaned up finally we can add
1:49:20
in a form message and this is going to show my error message if for some reason there is a particular error with our
1:49:25
form so let's go over here make sure we import this so we can actually see our form showing up on our page come over
1:49:32
here obviously we're getting quite a few errors right now so we need to go ahead and clean that up so let's scroll up it's something to do with this use form
1:49:37
function it's saying it's not a function I believe part of the problem could be because I imported my form from the wrong section this form should be
1:49:43
imported here from react or from Shad CN let's see if that actually cleans that up give a quick refresh still not quite
1:49:50
working oh it's because obviously I need to be able to use a client component if I want to use client side code so this
1:49:56
is a client side component and now we have our product name and I can type inside of there also to prove to you that validation is working I can specify
1:50:03
that this has a minimum value of one and it'll show me the error required if I don't and now if I just make sure that I
1:50:10
do everything correctly by putting a comma in there and I come in here and try to submit my form I get the error required but as soon as I type this in
1:50:16
it goes away so this is really nice for giving me errors from my different validations it's all hooked up automatically and I don't need to do
1:50:21
anything else on my own so I can just copy this down paste it in and all you need to do is change this name property
1:50:27
change the label and everything else should just line up perfectly so for me I'm going to change this to my URL so it
1:50:32
come into here URL whoops that's not where I wanted to type that out at there we go URL and this is going to be enter
1:50:40
your website URL as the label and the really nice thing is I can add additional field descriptions if I want
1:50:46
so I can say form description just like that and add additional information for example for this one I want to make sure
1:50:53
that I explain exactly how this works by saying hey make sure you include the https and the full path to your sales
1:50:58
page so that this will work now I'm getting an error because I don't have a URL filled up here so I'll say URL is a
1:51:04
string it's also a URL string and it has a minimum of one because it is required and this I will Mark as optional because
1:51:11
it is not required so now if I scroll down you can see that I get these two side by side well actually they're top
1:51:16
and bottom but as soon as my screen's larger they should show up side by side as you can see there they're now side by side and now they're top and bottom from
1:51:22
another depending on what my screen size is now the next one I want to work on is my text area so I'm just going to copy
1:51:28
down this entire form field make sure we get our screen a little bit easier to work
1:51:33
with there we go minimize this div down and right below it is going to be my description so this is going to be a
1:51:40
description this right here is going to say product description and then finally
1:51:47
I'll add in a little bit of description to tell people what this description does there we go make sure I close this
1:51:54
off so looks like I need to do that down there close that off there that off
1:51:59
there there we go so now I have that optional description and instead of an input here I want this to be a text area
1:52:06
which again I need to import manually because it's not Auto importing so get our text area from at/ components slui
1:52:14
text area there we go make sure I spell area properly scroll down and now we have our text area showing up and I'm
1:52:20
just going to add a few classes to it so we'll say min height of 20 and I'm going to say resize none so it's impossible to
1:52:26
resize and now I have my description showing up finally I can add in a section here which is a class name of
1:52:32
self end and this is just going to be where I put my button so button just like that
1:52:39
make sure I import button I'm going to say that it's going to be disabled whenever my form is submitted so form.
1:52:45
form state. is submitting whoops is submitting there we go and the is
1:52:54
submit and here I'll just sit save so now at the bottom of my form I have a save button and when I click on that
1:53:00
it's going to try to save my form and you can see I automatically get the errors because these things are technically required now before I go
1:53:05
about fixing all my validation errors and making it so we can save things I do want to mention one particular thing to you if I inspect my page I'll just do a
1:53:11
refresh here and I go ahead and I start typing information into this product name you notice I get a huge error and
1:53:17
that's because this is going from a essentially controlled to uncontrolled then back and forth from the component so essentially what I need to do is I
1:53:23
need to make sure I give it a default value of a string so here my default values I need to have an object where
1:53:29
the name is a string the URL is a string and my description is a string that way
1:53:36
when I go ahead and I start changing my inputs I won't get that error you can see now by inspect go back to my console
1:53:43
close out of all the errors I type in here you notice I get no more errors showing up on my page so now we go ahead and actually make this onsubmit work and
1:53:49
to do that we're going to be using an action so what I can do is I can open up my folder here inside of my server
1:53:55
folder I want to create a brand new folder called actions and inside this actions folder I'm going to create a file called products and actions are
1:54:02
just ways to actually call code from the client on the server safely and securely so I'm going to say use server to say
1:54:08
that this is actions inside of here export an async function called create
1:54:13
product and this create product function is going to take in some unsafe data that's because you can never trust
1:54:18
anything that comes in from the client and this unsafe data is going to be typ based on that schema that I used on my
1:54:24
client so I need to take that schema that's on my client and move it out into somewhere more accessible so I'll create a new folder called schemas let me
1:54:31
rename that to schemas there we go and I'm going to create a new file called products. TSS directly inside there so
1:54:38
now I can go ahead down onto my client which is in the app section right here I
1:54:43
have that schema defined up here I'm just going to remove that I'm going to paste that directly into that brand new file that I just created I'm going to
1:54:49
export that and make sure I import is OD now the final thing I'm going to do is I'm going to make sure that my URL does
1:54:55
not have any trailing slashes on it because for example if I type in product slne slash at the very end and hit enter
1:55:02
it brings me to the same page as if I didn't put that slash at the end of my URL so I'm going to do a transform here
1:55:07
a transform is a function that gets called to transform your data after it's been validated I'm going to call a
1:55:12
function called remove trailing slash just like that I'm going to create this function as like a utility function so
1:55:18
if I go into my lib utils folder I can export a function called remove trailing slash it's going to take in a path which
1:55:25
is a string and all it's going to do is I'm going to run a simple regular expression to remove the trailing slash
1:55:30
so this regular expression says you see a slash symbol at the very end if there's a slash symbol at the end of it
1:55:36
replace it with essentially an empty string super straightforward and simple so now if I go back into my schema and I
1:55:42
import this function you can now see that essentially anytime that I call this function it's going to remove the trailing Slash from my URL so that way
1:55:49
there's no confusion between a URL with or without that trailing slash that's going to make tracking My Views and so
1:55:54
on so much easier so here's my create product function I need to get my z. infer from the type of and I want to
1:56:03
get it from that product details schema so I call it product details schema just like that and now I have my unsafe data
1:56:09
directly inside of here properly typed I just need to make sure I validate it also here I need to make sure I import
1:56:15
that schema now that I moved it out of this particular file there we go that has been imported properly and let's go
1:56:20
ahead and write my action so the very first thing I need to do in this action is to get my user ID for who's actually creating this so user ID is equal to
1:56:28
awaiting calling that off function and again I don't need to await that I could just call the off function because it's going to happen in line then what I can
1:56:35
do is I can get a success flag and a data flag and I can get that from calling product detail schema. safe
1:56:41
parse and passing in my unsaved data this is just going to go through and validate that all the data that I'm
1:56:47
getting in here matches everything inside of this schema if it doesn't then my success is false so we can go ahead
1:56:52
and check that if we do not have any success or if our user ID for some
1:56:57
reason is null which should not be possible but if it is then we're going to go ahead here and we're going to
1:57:03
return down an error to the user so we'll say error true and we'll give him a message
1:57:09
that just says there was an error creating your product super straightforward so that they know
1:57:15
something went wrong because if we get to this point there should be no errors unless someone maliciously passed up
1:57:20
some incorrect code or tried to access his page P without a user ID or so on then what we can do is we can create our
1:57:26
product and we want to create that product inside of our database so we'll create a function called create product
1:57:31
DB and that's going to be coming from that DB folder that we worked on so inside of here we have our git products
1:57:37
now it's create a function called create product just like that so this is going
1:57:43
to be a rather straightforward function again it's going to take in my data which is my type of product table. infer
1:57:49
select or not infer select sorry infer insert there we go then we can call DB
1:57:55
Dot and I want to call insert on my product table I want to insert specific
1:58:00
values and that's just my data that I'm getting passed in super straightforward and easy to do and we can await the
1:58:06
creation of that and I want to get the ID specifically from here so I going to say my new product is equal to this I want to make
1:58:14
sure this is a sync so I can use a weight inside of it and I can pass along this returning flag and I can say I want to return an ID which is my product
1:58:21
table. ID so now when I insert this data into the database it's going to return to me an array of all the new things
1:58:26
inserted which in my case I insert one thing so there's one value in my array which is going to be my brand new product with an ID of a string so what I
1:58:33
can do after that is I can do just a really simple try catch so I can come in here and I can create a brand new
1:58:39
product customization so in my product customization table what I want to do is I want to
1:58:46
insert some values and the only value I want to insert is the product ID which is equal to my new product
1:58:53
ID there we go so I'm inserting a brand new thing inside of here and if for some reason I already have one just
1:58:58
completely skip it so if there's a conflict do absolutely nothing and I want to specify what the target is going to
1:59:04
be the target for this one is going to be product customization product ID there we go so if the product ID is
1:59:11
conflict just completely ignore it and don't do anything then we can add in a catch because if for some reason there
1:59:16
is an error trying to execute this particular thing well I want to delete my product because when I create a product I want to create both a product
1:59:22
and a customization at the exact same time and if I have an error creating my customization I want to delete the
1:59:28
product because that means there was a problem and I don't want to have one without the other so I can come in here
1:59:33
db. delete and I want to delete my product table just like that where my
1:59:39
product ID is equal to so product table. ID is equal to my new
1:59:47
product. ID there we go so that's going to make sure that when I create a product it also hooks up a brand new
1:59:53
customization for that otherwise if there's a problem it just returns and deletes that now the very last thing I
1:59:58
want to do is return my new product back to the user that way where I'm using
2:00:04
this inside of my actions so if I go back to my actions I can create that product from the DB so we'll say
2:00:11
import create product and we're going to be importing
2:00:16
that as create product DB from and that's coming from that DB folder so
2:00:23
we're going to go into our server into our database folder inside the products folder so now I can call this and pass
2:00:28
along all the information I want and it's going to return to me an ID for the brand new table that was created and I
2:00:34
can do some type of redirecting for example to a correct location so let's go ahead and get the create working I want to pass along all my data as well
2:00:41
as my clerk user ID that's all the data to create this and then to redirect I'm going to go to the slash
2:00:47
dashboard SL products page but I actually want to bring them to the edit page so I'm going to say ID sledit and I
2:00:55
specifically want to bring them to the tab for editing the countries and that's because on this parody deals website if
2:01:00
I were to go to one of these and I were to click edit you can see if I actually make it so you can see because it's not
2:01:05
mobile responsive there's a bunch of different tabs and I want to just bring them to the tab for editing the actual countries associated with that
2:01:11
particular table so we can go ahead and we can make sure we redirect them to that specific tab using our ID right
2:01:17
here and we need to make sure we await this because this is a promise and that should be all the code we need to do to be able to create a brand new product
2:01:23
and again you'll notice there's no database code in this file at all everything for our database is inside of
2:01:29
the specific folder for database as you can see only this file has anything related to our database code at all so
2:01:35
now let's go into that particular form and make sure we hook everything up we need to call that create product function I want to make
2:01:42
sure I call my action right here I want to pass along all of my different values so I can come in here and I can say
2:01:48
const data equals await calling that particular thing make sure that this is an asynchronous function and then if our
2:01:56
data. message is there then we want to render out that particular message and
2:02:01
first of all we want to check to see if there's an error so if our data has an error and if we have a message data.
2:02:08
message then we want to render that message to the user using a toast toast so we can say const toast equals use
2:02:15
toast that's going to be coming from Shad Cen and to make sure our toast actually work properly inside of our
2:02:20
overall layout for our entire application all we need to do inside of here somewhere is render out this
2:02:26
toaster and that's just going to be a location for rendering out all of our different toast doesn't matter where you put it as long as it's in your
2:02:31
application somewhere so now we can come and we can call that toast function just like that we can pass it along the title
2:02:38
for what this is going to say so actually I don't even need to check for error here I'm only going to check for message because I can check for my error
2:02:43
here and render out a different title for example I can say either error or success depending on if it was an error
2:02:49
or not my description is just going to be my data. message and then finally my variant is going to be either an error
2:02:56
variant or not so if my data. error then it's going to be destructive otherwise we're going to
2:03:02
have default as the variant so now this is going to render out essentially a toast which is either going to be an error toast or success toast depending
2:03:09
on if things worked or not now I do want to fix one particular problem with the code it's a nextjs problem you'll notice
2:03:14
here that I could technically return nothing for example if I redirect the user I don't actually return any data so
2:03:20
I could have this being null but you'll notice when I look at the actual form and I look at my data type you can see
2:03:26
this is not ever null so there's a problem with the return type so I need to manually give myself a return type on
2:03:32
this it's going to return a promise the promise is going to have an error which is a Boolean and a message which is a
2:03:38
string or it's going to return null from that promise or undefined sorry so it's going to return undefined just like that
2:03:45
so it's going to return one of these two different things now you can see here data could be undefined so I need to
2:03:50
make sure I check that it could be to find before I run the rest of my code so let's go ahead and see if all this code that we wrote actually works we're going
2:03:56
to come over to this page and we'll create a brand new product this is going to be test name we're going to enter a
2:04:01
URL we'll just say Local Host 5500 and we'll just give it some bogus
2:04:07
description if I click save you'll see that it looks like it's saving and it redirected me correctly to the edit page
2:04:13
so if I go back to my dashboard we should hopefully see that it no longer renders out no products because we now
2:04:19
have a product in our database if I go to Neon and I click on my products you can see there's a brand new product in
2:04:24
the database with that test name so everything was hooked up properly which is amazing so now we can go ahead and actually render out a grid of products
Product Grid
2:04:31
on our dashboard so let's go ahead back over to our page for our dashboard and instead of rendering out null we're
2:04:36
going to render out a bunch of information so the very first thing that I want to render out is an H2 that is going to have all the information for
2:04:42
our products so it's going to say like products for example but I want to actually put this inside of a link so
2:04:47
we'll give it a link here real quick our href is going to bring us to the dashboard SL products page and that's
2:04:55
because on this dashboard I'm going to render out things like analytics products and so on so I want to be able to have a link that lets me go between
2:05:01
these different things so I can put my products directly inside of there and I'm going to add an arrow right
2:05:08
icon just like that close that off and I'm going to give this a class name of
2:05:16
transition transform and that's cuz I'm going to do some fancy animations on that by making it so that anytime I
2:05:21
hover over this particular link I'm going to animate it so for the link I'm going to give it a class name of group
2:05:27
just like that and here I can say group hover I want to translate this in the X
2:05:33
Direction by just a little bit so it's going to make the arrow move just slightly to the right when I hover and these small little touches are really
2:05:38
what bring your application from eh to really impressive to users so now let's finish off the rest of the classes on
2:05:44
our link for example I want to have a flex and a gap of two on my items to be in the center and when I hover over it I
2:05:50
want to give it the underline treatment so that they know that this is a particular link now we should go ahead and give that a quick save and we can
2:05:56
see we got our products text showing up and when I hover you can see the arrow moves off to the right which is just a really nice little flavor right there
2:06:03
now to style my H2 to make it look a little better let's come in here and make the text quite a bit larger margin on the bottom of six text 3XL we'll make
2:06:11
the font that semi bold font we'll also use some flex and we'll justify some space between all of our different
2:06:16
elements there we go and that's because for this product section I'm also going to add a button for creating a brand product right here so we'll create a
2:06:24
button this is going to be an as child button just like that and inside of this
2:06:31
button I'm going to have a link with an HF that goes to the new product page so dashboard SL products new just like that
2:06:40
new product and let's even add in a little plus icon into it as
2:06:45
well there we go plus icon let's say the size is four margin
2:06:50
on the right of two and close that off give that a quick save make sure I import my button
2:06:56
component and now we should hopefully see we have our new product button so now we have the ability to actually go
2:07:01
to the products page which we haven't created yet we have the ability to create a new product directly from the dashboard and we have this nice little
2:07:07
hover animation over this products link let's go ahead and make it so that we can render out all of our products we're
2:07:12
going to do that inside of a products grid component so we'll say product grid and we're going to pass in all of our
2:07:19
products just like that and the reason I'm making my own component for this is cu I'm probably going to use this exact same grid on my products page and on my
2:07:26
dashboard so it just makes things easier for me to work with so we're going to come in here we have our product grid
2:07:32
I'm going to go back over to my component section this is used only on our private pages so we'll create our
2:07:38
product grid just like that in here export function product grid there we go
2:07:44
and to be able to get the type for this I'm just going to copy over the type because it's a little bit easier than making you watch me type it you can see
2:07:50
it's an array of products with name URL description and ID relatively straightforward stuff we are probably already familiar with this because
2:07:56
that's what our product structure looks like now inside of here we can return a div with a class name of grid because we
2:08:03
want it to be a grid by default we're going to have one column for our grid we're going to move up to two columns
2:08:09
when we have a larger screen size so grid calls two and then when we have an even larger screen size we'll move up to
2:08:15
three specific columns and then I want to give a gap of four between all of my columns before I Loop through each one
2:08:21
of my products and I render out the product card so for the product make sure I spell that properly I want to
2:08:28
render out a product card just like this which takes in a key which is my product. ID and it takes in all the
2:08:36
information for my product so now I can create this component which is pretty similar to this component up here so
2:08:41
product card just like that it's going to take in all of my product information
2:08:47
which is just this right here so it's going to be whoops ID name URL
2:08:56
description just like that and there we go that should be all the typing I need for that and now in here I can return my
2:09:03
card so let's create a card just like that import that properly we're going to have our card
2:09:11
header and inside of our card header I'm going to have a card title and this is just going to be essentially the link
2:09:17
that goes to my particular product to edit it so let's go into the here card title has a link with an href that goes
2:09:26
to that edit page so that's SL dashboard SL products SL whatever my ID is
2:09:33
sledit there we go and that's where I'm going to put my product name directly inside that link now let's
2:09:40
make sure I get these imported properly so we get rid of all those errors there we go we have our title showing up give that a quick save refresh over here and
2:09:47
make sure that I import my product grid properly we should now see we have a card with that test name inside of it so
2:09:53
that looks really good and on larger screen sizes you can see we have it showing up inside of a grid specific layout so now let's go back into that
2:10:00
product grid and modify what our product looks like so below my title here I'm going to have a
2:10:06
description just like that and this is just going to be whatever the URL of that product is just like that and then
2:10:11
below my header I'm going to have card content and this is going to be where I put the description of my card just like
2:10:18
that there we go that's showing up perfectly and I only want to show that if I actually have a description so we'll save
2:10:25
description description then we'll render out that card content there we go so now if we
2:10:31
don't have a description for this particular product for example if I create a brand new product and I don't give a
2:10:38
description there we go give it a save and make sure we navigate back to our dashboard since this page doesn't exist
2:10:45
yet you'll see it doesn't render out that section for the description now I also want to add a button here that allows us to create a drop down menu for
2:10:51
things like edit and so on so if I go back to here make this so you can see you can see I have this little button which means like edit and so on so I
2:10:57
want to be able to create a button that allows me to do that as well so that is going to require some more Shad scan
2:11:03
components so the components that we're going to need in this case are the dialogue component the alert dialogue
2:11:09
component and then finally we need the drop- down component so let's just click enter on that to install all those
2:11:15
components and it looks like I probably spelled something wrong there's no drop down I believe it's called drop down menu that should hopefully fix the
2:11:21
particular problems I'm running into there we go it looks like it's installing everything for us and once that's installed we can start to use those particular components I don't want
2:11:28
to overwrite my button and there we go we now have our different components so first let's create the particular button
2:11:33
that we need to have so we need to go inside of our card header and create a div to be able to space some things out
2:11:38
cu I want to put my button on the far right so we're going to use flex with a gap of two justify between to give me
2:11:44
that spacing and items on the end to make sure everything is pushed as far down as possible and this is going to go
2:11:50
all the way onto the the other side of my header or my title sorry there we go so right before my description because I
2:11:56
want it to be in line with my particular header then what I want to do is after my title I want to be able to render out
2:12:01
that button so we'll say button variant for this one after I make sure I get the button imported is going to be my
2:12:07
outline button and the class name for this is a size of eight with a padding of zero and inside that button I want it
2:12:16
to be a DOT horizontal icon with a class name of size
2:12:22
four and we also should probably put some screen reader text inside of there so this is just going to say div class
2:12:28
name screen reader only and this is just going to say like action menu something
2:12:33
like that just so that they know that this is something they click on and now we have that button on the right hand side that we can click on now the first
2:12:38
thing I want to do is convert this over to a dropdown so to do that we need to put everything inside of the dropdown
2:12:44
component there we go we got dropped down and it looks like it's not letting me import this information correctly so I have to manually add an port for that
2:12:51
all the way up here drop down from that's going to be
2:12:57
slash component SL UI
2:13:02
dropdown and actually I think it is dropdown menu and I think it's actually with a hyphen there we go that should
2:13:09
import it there we go it does import that drop- down component for us and it looks like it says that there is no
2:13:14
component with that name let me make sure I got this right drop down menu is what it's called so let's come over here
2:13:19
drop down menu and drop- down menu then inside that drop- down menu we need the dropdown
2:13:26
menu trigger there we go and this trigger is just going to wrap our button whatever we want to have open our
2:13:32
component so we can say as child to render that button out inside of our drop- down menu trigger and now when we
2:13:38
click on this it'll open up a drop- down menu as soon as we create the content so drop down menu
2:13:46
content inside this content which I want to give a specific size so we'll say w of 56 that's going to be constraining
2:13:53
the size of what this menu can look like we're going to have a drop down
2:13:58
menu item as child and we're just going to render out essentially a link that's what all these are going to be this
2:14:04
one's going to be a link that allows us to go to editing this particular application so we already have our edit link somewhere else but we'll just
2:14:11
retype it out dasboard SL products sledit actually
2:14:17
we need the ID first so ID sledit close off this link and just make it say
2:14:24
edit and let's make sure we import this drop down menu item give that a save and now you can see when we open this up it
2:14:30
has that text of edit directly inside there and if we wanted it to be a little smaller we can actually get rid of this class name and I believe that'll just
2:14:36
shrink it down to a little bit smaller size I think that looks a little better so we'll keep that class name off there now we'll copy down this drop- down menu
2:14:42
item because we need another drop- down menu item and this one is not going to be a link this one's just going to say add to site we don't even need the as
2:14:49
child cuz that's all that's going to do there we go we now have the add to site button as well and I'm going to copy this over one more time and this one is
2:14:56
going to be for deleting so we'll say delete just like that so now over here I have this delete button as well I also
2:15:03
want to separate my delete section so I'm going to use a drop- down menu separator all that's going to do is add
2:15:09
a nice little line between this add to site and delete to make them a little bit more distinct from each other so you don't accidentally click delete if you
2:15:14
don't really want to now to be able to make this add to site work when I click on it I want it to make a popup on my
2:15:19
screen that shows me exactly what I want to do and same thing with delete I want to create a popup that says are you sure you want to delete this so to do the
2:15:26
popup for the very first thing I need a dialogue so I can say dialogue just like this and wrap my entire menu in this
2:15:32
dialogue then I need a dialogue trigger which is going to be this drop- down menu item so we can say dialog
2:15:38
trigger just like this and wrap my entire thing in that and that is going to be as child and again this is not
2:15:45
letting me Auto Import so I'm going to come all the way up here import dialogue
2:15:51
from and that's at/ component UI dialog there we go now if we scroll down
2:15:57
here we can import our dialogue trigger give that a quick save and now when I click on this it at least should render
2:16:04
my dialogue as soon as I put some dialogue content inside it here so to do that directly outside my drop down menu
2:16:09
content I can come into here and I can create a section for my dialogue content so it's like dialogue content just like
2:16:16
this but I'm going to create a separate component for this which is going to be the add to site product
2:16:22
model content I'm going to pass along the ID for the product that I want to actually do this for so this is a
2:16:29
component that I need to create so in my component folder let's go ahead and we'll create that component.
2:16:35
TSX export function with that name and this is actually going to be a client
2:16:40
component because I'm going to have the option to actually copy things which requires me to deal with the clipboard
2:16:46
which is a client only state now to get started I'm going to paste in just the basic starting board plate code for our
2:16:52
dialogue I'm going to import all these things and then explain exactly what's going on inside of my code here let's
2:16:58
get that one imported there we go get our description imported so really all I'm doing is creating my dialogue
2:17:03
content that says start earning PPP sales and a description of exactly what this is going to do so now if I come
2:17:09
over to my thing I'm also making it so that it's a much larger size dialogue as well with some large font so if I click
2:17:14
add to site after I make sure that this is properly imported there we go you can
2:17:20
now see start ear name PPP sales close that out click add to site and you can see it opens that up with all my
2:17:25
information directly inside of there refresh the page you can see boom open that up now all I need to do is add the code to copy and so on so after my
2:17:32
dialogue header what I want to do is I want to add a pre- tag directly inside of here is where I'm going to put all of my code for the content so in the pre-
2:17:39
tag let's add some code and if I spell that properly there we go we can add the
2:17:46
code that we want to do I'm just going to put this inside of code we're going to generate that code in a little bit let's come up to to here I'll paste in
2:17:51
what that code should look like we give that a quick save all this code is doing is saying okay here's a script tag that
2:17:57
points to our current URL SL API products whatever my product ID is and banner so it's really just a URL that
2:18:04
points to an API endpoint and they're going to put that in their site and it's going to download some JavaScript for them when they put that on their site so
2:18:10
let's come in here ID string there we go and we want to
2:18:16
make sure we add these variables to our environment so this is going to be an environment which is from our client and we need this next public server URL
2:18:22
again we have type safety on all this information which is really great so inside of that data folder in our EnV
2:18:28
for our client we need to add along the information for our server URL which is z. string. URL and we need to put that
2:18:37
down here as well which is going to be process. env. that there we go and then
2:18:44
finally in our actual EnV files we can come into here we have our database we
2:18:49
have our clerk this is just going to be other for example and this is just HTTP Local
2:18:56
Host 3000 and when we deploy our site we'll obviously change this to something else so now in our example we can paste
2:19:03
that down and keep the value in there because that's pretty much what we want so now if we go back to the file we were just working on let's open that up that
2:19:09
is inside of our dashboard components and we have our add to site modal right here dialogue now our script is showing
2:19:15
up and if I give that a quick save we can actually see what this looks like by adding to site you can see we just get this script tag it's not really styled
2:19:21
right now so I'm going to go ahead and add some styles to this so we'll say class name margin bottom of four
2:19:27
overflow in the x is going to be Auto so we get a scroll bar padding is going to be four background is going to be
2:19:33
secondary it's going to be rounded the max width of this is going to be our screen extra large size so it doesn't
2:19:40
get too big we're going to make this text on it in the foreground for the secondary so that's just going to put it
2:19:45
inside of a box which we can scroll across which looks a lot better and as you can see this is just a link to a script that points back to our API so
2:19:53
essentially they're going to take this code copy it paste it into their own application for example like this and
2:19:58
then when their page loads it's going to call our API and we can load down the banner for them that's what this code is going to do now I want to create a
2:20:05
button that allows them to copy this particular code so I'm going to come in here I'll copy this over so you don't have to watch me type it and I'll
2:20:10
explain what's going on so first of all getting a button just like this super simple button the on click function
2:20:16
we'll get to in just a little bit but inside of this button all we're doing is we have a get children function right here which is going to get the
2:20:22
text inside of here and an icon that we're going to be rendering out to the user so all this is going to do I'll copy over these two functions so we can
2:20:28
see them get children is just going to be taking in this copy state so whether when the idle State the copied State or
2:20:34
the error State it's going to change my text so I have a copy button that when I click on it is going to say copy code
2:20:40
and when I click on it it's going to say copied if it was successful or it's going to say error if there's an error same thing here I'm going to render out
2:20:45
a different icon so I'm going to get this icon this icon and this icon from there now I want to be able to define
2:20:52
the type for my copy state so we'll copy that over you can see my copy state is either idle copied or error and to be
2:20:58
able to get that state we're going to be using a use state so copy State set copy
2:21:03
state is equal to use state of the copy State
2:21:08
type and by default we're in the idle state so let's import that from react there we go now we can scroll back down
2:21:15
here and we can get our icon so we can just get that by calling a simple function right here getting our icon
2:21:20
from our state and that's going to give us the correct icon we want to render and that's because we want to render a different icon if there's an error and
2:21:26
so on finally we need to import this dialogue close just like that which is going to be a button for closing out of
2:21:31
our dialogue and now when our on click to understand what's going on here is when they click this button I'm going to write the text to their clipboard so I'm
2:21:37
going to copy the text for them set my state to copied if it was successful and after 2 seconds bring it back to the idle State same thing with an error
2:21:44
after 2 seconds bring it back to normal so now you can see we have a copy close copy code Button as well as a close
2:21:49
button close just close relatively straightforward when I click copy code you can see my text changes and so on
2:21:54
and if I come over here and I click paste you can see it paste exactly what was copied in my clipboard so it's a lot
2:22:00
of code to do this but most of the code is just with handling the state if I were to remove all the state code I could get rid of this code and all this
2:22:06
code down here but the state is nice to be able to give people a visual feedback that everything was copied successfully and so on and now I have my modal and on
2:22:13
different screen sizes you can see my Modo looks different so you can see it's perfectly responsive to all different screen sizes so now that we have our
2:22:19
copy Modo all done and setup the final thing we have left for this grid view is just work on this delete button and make
2:22:25
sure that's working as expected so we can come back to the page we were just on for our grid so there we go our
2:22:30
product grid we can scroll down to this section where we have our dropdown and inside of our dropdown menu area between
2:22:36
our dialogue and a dropdown we want to have our alert dialogue show up next so we're going to bring that in make sure
2:22:42
we put that between the same two sections and we need to have an alert dialogue trigger just like we did before
2:22:48
so here alert dialog log trigger close that off there we go make
2:22:55
sure that this isn't as child so it's going to render properly and then we need to have the content so the content
2:23:00
for this is going to be our delete product
2:23:06
alert dialogue content just like that pass along the ID just like we were doing before and I'm actually going to
2:23:12
move this add to site product model down into our dialogue just so our tree is a little bit cleaner so we have our alert dialogue with its content drop down menu
2:23:19
with its content and our dialog with its content so now let's go ahead and make sure we import these things it's looking like I'm going to have to manually
2:23:25
import these again so it we'll just come up here import alert
2:23:31
from at SL components SL UI alert there we go and down here
2:23:39
let's go ahead and make sure that these are getting imported as well actually it's called alert dialogue not alert so
2:23:44
let me bring that up there we go and this is alert dialogue there we go that should
2:23:49
clean up those Imports and now we just need to manually import these ones and we need to create the file for our alert
2:23:55
dialogue content so let's come over to here create a brand new file. TSX there we go looks like I created it
2:24:03
in the wrong place export function paste that in there and we know that this is
2:24:09
taken in an ID and the ID is a
2:24:17
string now the bulk of this is going to be very straightforward code so I'm just going to paste it down do all of our
2:24:23
Imports and explain exactly what's going on here in just a second so let's get all of our Imports done get the footer
2:24:30
and the cancel in there let's make sure we close out our footer and close out our dialogue content there we go so what
2:24:37
I'm doing here is I'm rendering out the content I'm rendering out a header which just has a title are you sure and the description says hey you cannot undo
2:24:43
this this will permanently delete your project or your product that makes sense we want to make sure people know that this is a permanent thing then the next
2:24:50
thing I want to do is I want to render out the ability to actually confirm this so that's our alert dialogue action make
2:24:56
sure I import that from the right location there we go this alert dialogue action is essentially just going to render out a button for us so we can set
2:25:03
the button to be disabled in a certain State and that's going to be when our delete is pending and that's because all
2:25:10
the way up here we're going to have an is delete pending and a start delete
2:25:19
transition that's coming from the used transition hook this allows us to essentially call code from our client
2:25:25
onto the server and get a nice loading State also I'm going to render out some error messages using a toast in case
2:25:30
there was an error so we'll say use toast just like that there we go so now we have the ability to do a delete with
2:25:36
something showing up we also want to have some text inside of here maybe delete and we also should probably put in an onclick event listener which is
2:25:42
where the bulk of all of our code for this entire component is going to go so the very first thing inside of here I want to do is I want to call the start
2:25:49
delete transition and while this code is running I'm going to get that nice little loading state so that's going to be an asynchronous function and inside
2:25:56
of here all I want to do is delete my product so we can say data is equal to calling delete product and passing it
2:26:03
along the ID that we want to delete so we need to create this as an action so we can come all the way back to where we
2:26:08
have our server with our actions and inside of here I can export an async function called delete product just like
2:26:15
that this is going to take in an ID which is a string
2:26:21
and I can use that inside this function so the first thing I want to do inside of here is get my user id which is equal
2:26:26
to calling that off function then if for some reason my user ID is equal to null
2:26:31
I'm just going to return an error so we can say error is true and
2:26:38
message there was an error deleting your
2:26:43
product there we go then if there is no error at all map that inside of there
2:26:49
just so it's a little bit cleaner and easier to work with so now if there is no error we want to delete this but again I don't want to call my database
2:26:55
directly in here I want to call my function to delete things from the database so we'll say delete product
2:27:00
call this from the database just like that I'm going to pass it along my ID and my user ID to make sure I only
2:27:06
delete a product if the user is associated with it so now let's create that function inside of here export
2:27:12
async function delete product that's going to take in
2:27:17
an ID which is a string and it's going to take in a user ID which is a string as well and all I want to do is call
2:27:24
await db. delete on my product table and I
2:27:30
specifically want to do it where and so I want to do an and query the equality
2:27:35
of my product table. ID is equal to my ID and the equality of my product table.
2:27:43
clerk user ID is equal to my user ID so I only want to delete the product if
2:27:49
they have access to and from here I can actually get some data back from this to
2:27:54
get the number of rows that were deleted so I can say row count just like that and then I can say return row count is
2:28:01
greater than zero this means that there was a successful delete so it's going to return true or false if it was successful in deleting so we can say
2:28:09
const is success is equal to awaiting calling that function and I need to make
2:28:14
sure I import that from up here which is delete database or delete product as
2:28:19
delete product product DB there we go and it looks like I didn't put these
2:28:24
inside of an object so there we go there's my thing but actually I think what I'm going to do is I'm going to go into that function and redefine how I
2:28:31
did this as an object because I find that generally objects are a little bit easier to work with when you need to pass things along to make sure you don't
2:28:37
do it incorrectly so that's a string user ID is a string as well there we go
2:28:44
that cleaned that up a little bit all the code is still working the fine as fine as it was before and now we can say
2:28:50
if is Success then we can return actually we might as well just do this all in one
2:28:55
line we'll just say return error is equal to is success and we'll also
2:29:01
return a message and we'll come up here const
2:29:07
error message is equal to just so I don't have to type this entire thing out twice there we go error message paste it
2:29:15
into there so if my success then I want to render out one message otherwise I
2:29:21
want to render out my error message so we'll just say successfully deleted your product there
2:29:28
we go make sure I close everything off looks like it is all closed off but it
2:29:34
looks like up here I have an extra quotation that's where my error is coming from so now I have this delete product function done now what I need to
2:29:40
do is make sure I have everything just hooked up properly so this first of all I should probably import that works fine
2:29:46
now what I can do is I can go into here make sure that my delete product is being imported make sure I get the action version properly and now I can
2:29:53
say if data. ER actually I need to make sure I wait this first if data. message
2:30:00
which it should always have but just in case it doesn't then I can render out a toast message so up here I already got
2:30:05
my toast so I can essentially do the same thing I Ed my toast last time so let's just search for where I used my
2:30:11
toast last time to just copy over that code so here take that code and we're
2:30:16
going to copy it into this section right here cuz the code is essentially exactly
2:30:21
the same as what I had before now I'm going to get a toast message properly back and I need to make sure that this
2:30:27
is a client component since I'm using client side code so now if I wanted to for example
2:30:33
delete this one I can come in here click delete are you sure yep I'm sure I want to delete there's an error it looked
2:30:39
like my error messages and all that was kind of messed up so let's go back and make sure everything is working properly inside my action you can see here if
2:30:45
it's successful successfully deleted your project otherwise it's going to show my error message error should be the opposite of is Success so it should
2:30:52
have actually deleted my product so if I refresh we can see the product is gone the reason why you didn't see anything
2:30:58
change though is cu I didn't actually deal with caching and revalidating my page properly now you may think well that's easy to fix all you need to do is
IMPORTANT: Caching System
2:31:04
just put a revalidate path in there if I can actually spell properly revalidate path and we know that our path is the
2:31:11
dashboard path and boom that would fix our problem but we also render this on the products page so now we need to add
2:31:17
in the products path oh and you know what we also have to do with the edit page as well so we need to put that in
2:31:23
there and oh maybe it messes with our analytics or something else having to manually put every single path you need to revalidate is incredibly tedious and
2:31:30
difficult to do so instead of doing our revalidations with our path here I'm going to be handling this using tags and
2:31:35
I'm going to have a full robust system this is honestly the thing that I think is the best about this entire project is how we're going to be handling caching
2:31:42
with tags and it's going to be really nice because everything's going to be handled in one place so we're going to have like a cash manager almost so
2:31:49
inside of our live I'm going to create a brand new folder called C.T this is where all of our caching is going to
2:31:54
take place and I'm essentially going to have three different tiers of caching the first tier is like a global cache so
2:32:00
like for example the countries there's the same amount of countries for every user and if I change one country I want
2:32:06
to refresh my entire cash for all of the countries the next tier is going to be a user tier for example when a user
2:32:13
creates a product I don't want to refresh the cash for all the products I only want to refresh the cash for that
2:32:18
user's products and then finally there's the instance where I have an individual product for example if I delete this one
2:32:25
product I only want to update the cache for that one product I don't want to update the cache for literally everybody
2:32:30
in our entire application so that's how I want to make sure I handle my caching so I'm going to have a few different functions inside of here I'm going to
2:32:37
have a get Global tag function which is going to be how I get a tag for a global
2:32:42
cache I'm going to do the exact same thing then for a user tag so this is for user level caching and then I'm going to
2:32:49
have a final tag tag here for ID level caching so I have my three levels of caching I have something that's at the
2:32:54
global level the user level and the ID level and to determine what I'm caching it's going to be based pretty much on my
2:32:59
database so I'm going to export a constant called the cach tags and that's going to be an as const so I make sure
2:33:05
that this is never changing and inside of here I'm going to say for example my products is going to be a string called
2:33:11
products so now I have the ability to cach anything with this product tag and I have the ability to do it globally
2:33:16
with a user or with a particular ID so here all I want to do when I cach something globally is pass along a tag
2:33:22
which is a key of the type of cache tags
2:33:28
there we go so now this tag is either going to be products or whatever else I pass in here for example if I have the
2:33:34
ability to do product views this would have
2:33:40
product views and now you can see that I have two options that this can be so to get a global tag I'm just going to
2:33:46
return the text Global followed by a colon followed by whatever my tag is so it's going to be cach tags of my tag and
2:33:53
again I want this to be a constant variable so I know that this is going to return to me a string that is always either Global products or Global product
2:33:59
views now for my user tag it's going to be very similar this is going to take in a user ID which is a string and it's
2:34:06
also going to tag in this particular tag just like that so now here I want to pass in my user followed by my user ID
2:34:15
followed by hyphen to distinguish that and this is as const so now you can see here it's always going to be user colon
2:34:20
whatever the ID is- products or product views now the final thing I want to do is the same thing for the ID but instead
2:34:26
of saying user this is going to say ID and this is going to have an ID here and I'm pretty much going to copy over the
2:34:31
exact same types so now we have our ID and again you can see when I overover this it's ID colon whatever the ID is
2:34:37
products or product views so now I have three different granular levels of caching the final thing I want is a
2:34:43
function just to clear my entire cache so we'll say export function clear full
2:34:48
cache just like that and that's going to call revalidate tag and it's going to call it
2:34:54
with this star symbol and this is something I'm going to put as a tag on every single thing that is cached to my
2:34:59
application that way if I call this function I can clear the entirety of all of my cache across my entire application
2:35:04
this is kind of useful for development or if you do something that really needs to just nuke the entire cache now the next thing I need to do to make sure I
2:35:10
handle caching properly is to make sure that I only allow certain tags into my cache so I'm going to export a type
2:35:17
called valid tags and this is going to be equal to the return
2:35:23
type of my git whoops type of get Global
2:35:29
tag just like that or it's going to be equal to the return type of my user tag
2:35:34
so we can come in here with our user tag and the same exact thing
2:35:39
for my ID tag so this valid tags is either going to be a global tag a user tag or an ID tag so now I know all the
2:35:46
different types of tags I can use and I have the ability to create those tags now all I need to do is actually set up
2:35:52
my caching cuz this just gives me the tags that allow me to revalidate and cache things now I need to make sure
2:35:57
that I actually do this caching now in nextjs the way that you cache something let's go back to our database file we'll
2:36:03
just do products for example and we have this git products function the way that you cache things inside of nextjs is you
2:36:09
call the Cache function this is built into react and this allows you to Cache something for each individual request
2:36:15
and you also have the unstable cache function in nextjs that allows you to cash things across multiple requests
2:36:21
this is similar to how fetches are cached by default this allows you to cach things like database calls as well
2:36:27
so we need to wrap all of our function calls in a cache and an unstable cache call and the nice thing is we pass in a
2:36:33
function here it doesn't really matter what it is and then you have a second parameter where you can pass along all the different tags that you want to
2:36:38
Cache but first of all we need the key Parts which we're going to put as undefined because that's just going to default them to whatever they should be
2:36:45
and then we're going to come in here and we can say tags and this is where we put an array of all those different tags so
2:36:50
for example I could say like Global and then products and this is going to tag things globally on the
2:36:57
products table and so on so this allows me to do all my different tagging so what I want to do is I want to implement this in a helper function that makes it
2:37:03
a lot easier and more type safe so let's get rid of all those Imports we don't need them anymore go back into our
2:37:08
caching section I'm going to create a function which is going to be called DB
2:37:14
cach and there we go this is going to take in some props and all I wanted to do is call the cach function from react
2:37:20
I also wanted to call unstable cache that's going to be from nextjs and I
2:37:26
want to pass it in whatever my function is now in our particular case I want to essentially just get the type of
2:37:31
whatever unstable cache is and pass it along as my props so my props here or my arguments or whatever I want to call
2:37:37
them we'll say args just like this is going to come directly from whatever the type of the unstable cache is so what I
2:37:44
can do my first argument is going to be my call back function so that's parameters and I want to get the type of
2:37:50
unstable cachee just like that and I want to get specifically the first property from there so that's going to
2:37:55
give me my call back function so I can pass that in just like that and that's the first parameter passed along now I
2:38:00
know for a fact I'm always going to pass along undefined as the key Parts the key Parts essentially determine how do we
2:38:06
know what the ID of this cache is like if you have different parameters you pass along to a function it's
2:38:12
automatically going to generate the key Parts based on the function name and the parameters you pass along so as long as
2:38:17
you make sure that everything you pass along to your function and the name of the function is unique that's all you need to do for the key parts so leaving
2:38:23
it undefined will work by default but if you need to add extra things to uniquely identify that function you can add them
2:38:29
in here but for our case everything works with undefined now finally we have where we're going to get all of our different
2:38:35
tags that we need to be implementing into this particular section so we can say tags like this and that's going to
2:38:40
be our second parameter that we're going to pass to this particular function it's going to be an object with all of our
2:38:45
different tags and by default we're going to set it to an empty array if we don't have any tags we want to add to this particular thing now for our
2:38:51
particular use case we're always going to want to add tags even though these are optional so we're going to leave that on like this saying that it's not
2:38:58
actually optional and for the type of this I'm going to say it's going to be tags and it must be one of those valid
2:39:03
tag ideas that I've created up here this type right here for valid tags it must be one of those particular types to work
2:39:09
so here we go we need to pass along a tag and it must be one of the valid tags that we have allowed this is how we
2:39:14
actually have type save tagging we know it's now going to be one of these three different types of tags being added to this every time we do this caching now
2:39:21
I'm going to add that star tag to every single thing I cache so I'm going to take all my normal tags and add in the
2:39:27
star tag so now everything that I cach with this DB cache function is going to have that star tag on it so I can easily
2:39:32
clear my entire cache just like that now this unfortunately I don't think will work quite out of the box like this I think we'll need to do a few little
2:39:38
modifications we'll just come in here with a return type and try to use this DB cache so what we can do is we can go
2:39:44
back into our database for our products we have our git products function and I want to wrap this inside of a cache well
2:39:50
to do this first we're going to need to split this into two separate functions to make it a lot easier to work with so I'm going to create a function down here
2:39:56
called get products internal and this git products internal function is just going to do everything my normal git
2:40:02
products does it's just going to return all the information and it's going to take in the exact same props it's essentially the exact same function but
2:40:08
the git products up here is what's going to do the caching for me so what I want to do is I want to get my cache function
2:40:14
we'll set that equal to calling DB cache and what I want to do is pass it that name of git products inter internal so
2:40:19
I'm just going to be calling that particular function right there and I obviously need to give it all the tags that I need now the way that I'm doing
2:40:25
tagging is whenever you're tagging something that's getting information you always want to tag it as specific as
2:40:32
possible so if it's getting something that's just an individual ID tag it as an ID if it's getting something based on
2:40:37
a user ID which is what we're doing here tag it based on the user ID and if it's getting something globally with no user
2:40:43
ID or normal ID then we tag it as a global so in our case for our tags here
2:40:48
we want to give a user tag because we're doing this for a user ID and we know that we're doing this specifically for
2:40:55
the products table so I'm going to say cach tags product so now we have our cache function and what I can do is I
2:41:00
can return Calling that with my user ID and my limit just like that so the nice
2:41:05
thing about how all of this works is when we do this caching with our key Parts this is going to be caching the user ID and limit so if we try to call
2:41:12
this function with a limit of five or a different user ID it's going to be a different cache but if we call it with the same user ID and the same limit it's
2:41:19
going to hit this cache and it's going to get the information from there now the reason I'm saying that I don't think that this will work as we expect is
2:41:26
because right now the type that's being returned from here is promise of any and that's because this unstable cache is
2:41:31
actually a generic so we need to convert ours to a generic as well which is a type T and this needs to extend whatever
2:41:38
the type of call back is inside of here if we look at what the type of call back is it is this right here so we need to
2:41:43
extend this specific type to make this the same thing so I'm going to put the extension right there for our specific
2:41:49
type so T is extending that type and then we can just say everything for our parameters and for this function are
2:41:55
using that type of T so now if I give that a quick save and we go back to that product section we should hopefully see
2:42:02
here that now this Returns the correct type as you can see it's returning all of our type information so everything has been typed properly by setting up
2:42:08
that generic so now every single time we get information from our database we first need to create the internal
2:42:13
function that does the actual call for us and then this wrapper function all this does is make it so that we get
2:42:19
proper tagging for example a user tag and so on and we just call the function and pass it on so this is really just saying hey get the information from the
2:42:25
cache and return it to the user otherwise if it's not there call this particular function so now we're caching
2:42:31
things as specific as possible again user tag ID tag or globally now we need to make sure we clear that cache every
2:42:37
single time we make changes to these spec specific things so for example in this create product function after I'm
2:42:43
done creating my product I need to do some revalidating of my tags down here so I would need to revalidate a tag for
2:42:48
like my user with the specific user ID you know that I have inside of here I would
2:42:54
also need to make sure that I do this for whenever I have a single ID I need to make sure I get the global one as
2:43:00
well there's a lot of things I need to revalidate every time I make a change to something so I'm going to create a helper function that allows us to do
2:43:05
that much easier so I'm going to go back into that cache create a brand new
2:43:10
function and this one is called revalidate DB cache and all this is going to do is take in the tag it's
2:43:17
going to take in a user ID and it's going to going to take in the ID and for typing of this information the tag is
2:43:22
going to be required it's going to be that key of type of cache tags but my user id well this is going to be a
2:43:29
string that's optional and my ID that's also going to be an optional
2:43:35
string so now what I can do inside of here is I can make sure that I'm always revalidating my tag so I'm going to
2:43:40
revalidate my tag and this is going to be for the get Global tag I'm going to pass it in my tag so there we go
2:43:47
whenever I do this revalidate database cach it always revalidates my Global cache so if something requires all of my
2:43:53
global data it's going to make sure that no matter what happens it's revalidated then if I have a user ID that's not
2:44:00
null well then I want to revalidate a tag so we can say revalidate tag and
2:44:06
this is going to get user tag for my user ID and my tag so now if the thing that I created for example is a new
2:44:11
product for a specific User it's going to say hey anywhere that I'm caching information for a user and for products
2:44:17
why don't you revalidate that as well which is really convenient because this get products function is something that
2:44:23
specifically gets products for specific users so when I create a new product it's going to revalidate this as well so
2:44:28
it's making sure that that updates the information that's why when we put a tag on our information that we were getting
2:44:34
from our database we put the most specific tag possible and that way whenever we revalidate a cache we
2:44:39
revalidate all of the different caches from the least to the most specific that way the things that need revalidated
2:44:45
only get revalidated when they actually change now I can do the exact same thing here with my ID so I can come in here
2:44:52
that would be ID and this is going to be an ID tag there we go now we have the ability to revalidate our database cache
2:44:58
and we can just use this function anytime that we change our database we can call this function and it's going to be doing all the hard work for us so
2:45:04
here I want to reval validate our database cache I want to get our tag make sure I import this function there
2:45:10
we go and for the tag I want this to come from our cash tags. products I also want to specify a user ID and I want to
2:45:18
specify ID that we can pass along as well so the way we can get that is just from here I'm already returning the ID
2:45:24
let's just go ahead and return the clerk user ID which we'll just call user ID as product
2:45:30
table. user ID there we go so now I can just say that I want to get my new product. ID and here I want to get my
2:45:38
new product. ID and this one should be user ID so now this is going to revalidate
2:45:44
all my cach information for me every time I create a product I can do the same thing down here and delete I want
2:45:50
to just make sure that I revalidate my database cache and I want to get that new product so I'm going to do the same
2:45:55
thing up here where I did a returning field down here I'm going to throw in a quick returning Actually I don't even
2:46:01
need to throw in a returning because it already has the user ID up here so I'm get my user ID and my ID I'm already passing that
2:46:07
information in so I don't even need to bother with the returning I can just revalidate my cache because I did a delete but again only if my row count is
2:46:15
greater than zero so just like that I'll only recache if or revalidate my cach if things actually change so let's minimize
2:46:22
that down minimize this down and we can minimize this down and we can kind of do a little bit of a high level overview of
2:46:28
exactly what happened so whenever we do anything that modifies our database for example we delete something or recreate
2:46:33
something what we do is we make sure we call revalidate database cache and we pass it along all the information we have so for example when we delete a
2:46:40
product we know exactly what user that was for we know exactly what the idea of the product was and we know what thing
2:46:45
we're tagging that as in our case it is a product so we're to revalidate all the different tags the individual ID the
2:46:51
user ID and the actual tag for the overall Global products then whenever we're trying to get information if we're
2:46:58
getting information for an individual user we're tagging that as a user if we're getting information based on a single ID we would tag that with the get
2:47:05
ID tag and if we're getting information generally with no user or no ID we just tag that as a global tag then we
2:47:12
guarantee that anytime that we're accessing information it's going to be the most up-to-date information and it's
2:47:17
going to be cached if it hasn't changed recently this is the best way to deal with next jss cache that I found and the
2:47:23
only other thing that we need to do this is just something that's currently a problem with nextjs 14 nextjs 15 fixes
2:47:29
this is inside of our next config inside of our experimental we need to make sure that for our stale times on the dynamic
2:47:37
pages is set to zero because we don't want any Dynamic pages to be cached unnecessarily because that's caching our
2:47:43
Pages not our data everything we dealt with was caching our actual data and now this is actually going to make it so our
2:47:49
caching Works flawlessly so let's go ahead and create a brand new product real quick so I can come in here type in
2:47:54
some information doesn't really matter what any of this is there we go click save and you can
2:48:00
see it's going to bring me to this page that doesn't exist but if I navigate over to my dashboard you can see that in
2:48:05
just a second it's going to load and all my products are there if I then want to delete a product for example I delete this product click delete you can see it
2:48:12
successfully deleted my cach was invalidated so it refetch my data for this particular page it all works
2:48:17
flawlessly and the best thing about this system is it's so easy to use all you need to do is think okay am I creating
2:48:23
something for example if we go down into our database for our products am I creating something if so revalidate my
2:48:29
cach am I getting information if so get it based on whatever the most specific tag is possible and that's literally all
2:48:36
you have to think about when you deal with this caching and everything else will work with for you flawlessly that's the thing that I am really proud of in
2:48:41
this application I think is applicable to pretty much any application you can build and setting it up took a little bit of time but using it is incredibly
2:48:48
easy now before we forget I want to make sure that inside of my database section for subscriptions we do the exact same
2:48:53
thing here I want to revalidate my cach so revalidate DB cache and again what's the most specific information we can get
2:49:00
well in our case we can get ID and user ID information from here so I just want to make sure I put in a returning into
2:49:07
here make sure this is my data just like this and I should
2:49:12
probably call this like new subscription or something like that there we go so we're getting our new subscription and
2:49:17
the information I want to get is the ID which is my user whoops subscription ID
2:49:23
and we want to get the user ID which is just user ID user subscription table.
2:49:29
clerk user ID so now I can revalidate my cache I have my tag which I need to
2:49:34
actually add to the particular thing because I don't have a tag for user subscriptions yet so all the way up here user subscriptions we'll just call it
2:49:42
subscription is subscription there we go then down into here I can say tag is going to be cash tags whoops cach tags.
2:49:52
subscription my ID is my new subscription. ID and then finally we
2:49:58
have my user id which is new subscription. user ID now I do want to do a quick check if
2:50:05
new subscription equals null then I don't want to do this so if it's not equal to
2:50:11
null then we can run this code right here there we go now let's just make sure we throw in on a weight up here
2:50:19
make this an async function and we can return our new subscription back to our
2:50:24
user and then we can make sure I'll just search to make sure that we're not messing anything up where we used this
2:50:30
so here we're just awaiting it we're not waiting for any information back that works fine lastly we need to make sure we do the same exact thing with our
2:50:37
delete user to make sure we're doing all of our caching properly so this is going to give us essentially an array of data
2:50:42
based on what we've deleted and so on so we already have the user ID I just need to get the ID of the things that we're
2:50:47
deleting and we're deleting multiple different things so this is going to be by far the most complicated section we're dealing with so first of all in
2:50:53
our returning section I'm going to just throw in a quick returning here and I want to return just the ID so we're going to say ID is user subscription
2:51:00
table. ID same thing down here I'm going to do a returning on my products drop that in right there and
2:51:06
this is product. ID there we go then what I want to do is I want to get all my information being returned back to me
2:51:13
so we essentially have our rows for our user subscriptions and we have our products
2:51:19
that are being returned back to us so let's come in here this user
2:51:25
subscriptions requires us obviously to throw in a quick await here make this an async function there we go so now this
2:51:33
user subscriptions is essentially an array we can Loop through each one there should only be one but we'll just Loop through them just in case and we'll come
2:51:40
into here and for each one we're just going to revalidate our DB cache so revalidate DB cache the tag is going to
2:51:48
be our cash keys or cach tags. subscription our ID is our
2:51:54
subscription let me make sure I get this sub we'll just call it sub sub. ID user ID that is just our
2:52:02
clerk user ID that we got from up there so we just Loop through all of our user subscriptions do the exact same thing
2:52:08
for our products so for our products for each product we want to make sure this is
2:52:15
revalidated our cash for our products there we go and this is is by far the most complicated of all the ones that
2:52:20
we're dealing with finally we can return down our information if we really want so we can say user subscriptions and
2:52:26
products just in case we want to use that information anywhere else and now that we have that set up setting up our
2:52:32
future functions is going to be so much easier because we don't have to go back and reimplement everything but now we have a super bulletproof caching system
2:52:38
implemented so we took a pretty long detour getting all this caching setup but now we can actually work on the edit
Edit Product Details Form
2:52:44
page for our product so when we click here to edit a product now we can finally work on this page so the very
2:52:50
first thing that we want to do is go into our application we want to go into our dashboard into our products we'll create a brand new folder this one is
2:52:56
going to be for a product ID and then inside of there we obviously want to have our edit page just like that so
2:53:04
export default function edit product page now this is
2:53:11
going to take in two separate sets of parameters we have our prams which is our product ID as well as our search prams and that's because if you remember
2:53:17
when we created a product we actually redirect them with the tab of country so we can go directly to the country page
2:53:23
but by default we're going to bring them to the details page and this just allows us to choose what page they go to because we're going to have a tab based
2:53:29
design now the next thing I want to do is I want to get my user ID and we can get that from
2:53:35
off and again I'm going to get the redirect to sign in so if my user ID is
2:53:43
null we can just redirect them to that signin page then finally I want to get my
2:53:49
product and this is going to be calling await git product and we don't want to call git products we want to just get a
2:53:55
product for an individual ID and for a user ID because we want to make sure that the user has access to this
2:54:01
particular product so we'll come in here with an async function and we can create git product and this is where all that
2:54:06
caching stuff is going to come in really handy so very first export function git product that takes in an ID which is a
2:54:16
string and a user ID there we go make sure I actually type
2:54:22
that properly so I can get rid of the type from here there we
2:54:27
go and this function is essentially going to do the same thing as this function but just call a different function internally so we want to call
2:54:33
the get product internal and we want to pass it along all these props right here so I'm just going to copy our props and
2:54:39
we're going to paste them down now again when it comes to tagging you always want to do the most specific tag so in our
2:54:44
case we want to get an ID tag because that's the most specific tag here that we can do and we're going to paste in
2:54:49
the ID just like that now the query for that git product internal is going to be very simple I mean it's almost going to
2:54:55
be exactly the same as this function so I might as well just copy this down get product internal is going to take in an
2:55:01
ID and a user ID which is an ID that's a string and a user ID which is a string
2:55:08
and then instead of finding many we want to find the first one and obviously don't pass in any limit or order by so
2:55:14
we're just going to be getting the very first product that has both the ID and the clerk ID so equal product
2:55:22
table. ID is equal to our ID and then make sure we import the and function
2:55:28
from here there we go get all my parentheses closed off give that a quick save so now essentially where our clerk
2:55:34
ID and our ID are equal let's call this
2:55:39
ID column just like that here we go so when our ID and our clerk ID are equal
2:55:45
we're going to be getting a particular product and we're returning that right here so now we have that set up you can see with the caching that was very easy
2:55:51
to do and the nice thing is automatically it's going to be revalidated with all this other stuff we've already done we don't have to worry about now that we created a new
2:55:57
page going back and changing all of our revalidations again it's all handled for us automatically so back to that edit
2:56:03
page we can import this function there we go and it looks like that was correctly imported my user ID is string
2:56:10
or null here if to make sure we return there we go that gets rid of that and we get a product right here being returned
2:56:16
to us obviously this product could be to find though so our product equals null
2:56:21
then we just want to return not found just like that let's make sure we import not
2:56:27
found and now for our actual edit page to be able to return the information that we want I first want to make this a
2:56:32
page with a back button just like we kind of had before so for this I want to have my back button hre equals SL
2:56:39
dasboard SL products and then I also want to make it so my page title is
2:56:45
equal to edit product then inside of here we're going to be
2:56:51
using tabs now Tabs are something we need to import from Shad CN so come in here we want to add
2:56:57
tabs give that a quick second to actually import everything for us there we go so now we should have our tabs be
2:57:03
able to be imported directly for us and by default our default tab is going to
2:57:09
be whatever our search pram tab is so search prams actually I think we just call tab just like that there we go now
2:57:16
we're getting our default tab oops default
2:57:23
tab actually it's default value there we go that's why it wasn't working now we can get into our tabs list make sure we
2:57:30
import that from the right location I'm going to give this a class name of background and I'm going to do 60% op
2:57:36
opacity just so it's going to look relatively good in place and now we can put each of our individual tabs in here
2:57:41
which are tabs trigger so for each trigger we give it a value this is like the key so in our case details for
2:57:47
example for the det Details page that's what our default is and then we give it a label of details now we can do this
2:57:53
for all of them so we have country country and we have our
2:58:00
customization and here customization give that a quick save and
2:58:05
you can see we get our three different tabs and we can toggle between them and we can display different information for each of our individual tabs so after our
2:58:12
list we're going to have to do tab content where it has a specific value for example details is going to be the
2:58:17
value for this this one and let's just say it renders out details now we're just going to copy that down make sure I
2:58:24
spell that all properly there we go copy that down we're going to do this one
2:58:31
country and then this one customization so now you can see as
2:58:36
we toggle between them we get different information being shown I just need to make sure I spell customization properly
2:58:42
there we go and now you can see we get all of our different tabs showing our information now obviously I want to show much more complex information so I'm
2:58:48
going to create essentially custom components so for this one we're going to have our details tab which is going
2:58:53
to take in all the information for our product now I'm just going to put this component directly in line and it's very simple it's going to take in a product
2:59:00
with all of our product information and render out a basic card so let's just import all the different things related
2:59:06
to our card you can see that the card is honestly incredibly simple there we go we have extra large text product details
2:59:12
and we're rendering out our product details form and we're passing along the product for our default value so let's
2:59:17
make sure get this spelled properly details tab there we go and now I just need to make sure that this accepts all of our
2:59:24
product details so let's go down to that form open it up and by default this is going to take in a product
2:59:31
optionally and for the type of this we come over here we can just copy over essentially what the entire type is so
2:59:37
I'll just paste all that in there there we go and I want to make sure that this is optional so I'm going to pass it in saying that this is optional that this
2:59:43
comes in there and now we can use this for our default values so if we have a product then we're going to use our
2:59:49
product otherwise we're going to use this as our default values so I can just use the double question mark symbol here
2:59:54
and that's going to use by default our product for our default value otherwise it's going to use this information but
3:00:00
our product needs to be slightly modified because the description here is string or n and this essentially
3:00:05
determines it needs to be either string or undefined so what we can do here is take all of our product properties and
3:00:12
change the description to be product. description or we can change it to be an empty string
3:00:18
just like that there we go so now I need to essentially go back to how I had this
3:00:24
before where I said product if we have a product then we render this out otherwise we render this out so by
3:00:30
default we use our product if we have one otherwise we use essentially all the information that's defaulted to just a
3:00:36
bunch of empty strings so this should hopefully fill in our default values if I refresh you can see it fills them out now we just need to make it so we
3:00:42
actually update our product if we have one so here I'm going to get a variable called action and if product
3:00:49
is equal to null then we're going to call out to create product whoops create
3:00:54
product otherwise we're going to call update product I'm going to bind the ID of our product to that so we'll say null
3:01:01
product. ID there we go and then down here where we call create product we can just call Action instead and all we need
3:01:07
to do is implement this update product function so where we have create product we going to copy this paste it down I'm
3:01:14
going to call this one update product and essentially do the exact same thing that I did in my create but instead of
3:01:20
creating I'm obviously going to update so the really nice thing is most of our code stays the same this gets changed to update product DB so up here we're going
3:01:27
to say update product as and paste that in we'll create that function in just a
3:01:33
second there is an error updating your product and then instead of redirecting the user we're just going to send them
3:01:38
down essentially a success error message so error is going to be false and then we're going to have a message that
3:01:45
says product details updated there we go so now that they know it was updated and we don't even care about getting the ID
3:01:51
back because all of our cach invalidation is going to take place in this update product DB function so now we just need to create that function so
3:01:58
inside of here we can export a asynchronous function called
3:02:04
update product there we go I'm going to put that in between these two and for this
3:02:11
update product it's going to take in a few things first of all we're going to take in our data and this data is just going to be the same as our insert data
3:02:17
but in instead of being a full thing it's actually going to be partial because we can update just one field we don't have to update all the fields then
3:02:24
we're going to be passing in the ID as well as the user ID that we want to update this for so ID is a string and
3:02:30
user ID is a string as well so this is essentially our data to update with and this is the wear clause for how we want
3:02:36
to update this then we can just call this to update our database so I'm just going to copy this code over because it's rather straightforward db. update
3:02:43
on our table we want to set our data to whatever we pass in here and we want to only do it where the product table clerk
3:02:48
ID is equal to our user ID and ID is equal to our ID if that happens and we're able to successfully update things
3:02:55
so we can get from here our row count so if row count is greater than
3:03:04
zero well then that means that we had a successful update so I can come down here row
3:03:11
count greater than zero and then I can just revalidate our DB cache and I want
3:03:16
to do it over my tag is my cach tags. product I want to do it here where my
3:03:24
user ID and my ID are based on what I pass in this should say products and there we go that'll revalidate all of
3:03:29
our cach in information for us and we return true or false whether or not it successfully updated everything so now
3:03:35
we can save this cache file because looks like I forgot to save it for some reason now into our actions though that's where we really want to be come
3:03:42
to here oops there we go this update DB is going to take in the information we
3:03:49
want to update so in our case it's just our data and then we're going to pass along our ID which is going to come in
3:03:55
here and our user ID just like that and to be able to get our ID information we need to make sure that we pass that in
3:04:02
with our update product so we're going to say ID is a string is a very first parameter that way we know which product
3:04:07
we want to update then we're just going to say is success is equal to that we can come up here error message is equal
3:04:15
to again just so I don't have to type this out multiple times there we go
3:04:21
error message and then we can say our success right here opposite of that obviously error is the opposite of if we
3:04:27
have a success and then we can say is Success then we want to render out that it was successful otherwise our error
3:04:35
message there we go that's all we need to do for the entire update product function now what we can do is we can go
3:04:40
and make sure all of our code is working so inside of our components product details we need to make sure that we
3:04:45
import this function so get it from the there we go that updates it looks like it's working fine no more errors in here
3:04:51
let's refresh our page and let's just try changing the test name to test name two click save you can see product
3:04:57
details updated and if we go back to our product page this is bringing us to the overall products page which we still
3:05:02
don't have we'll go to the dashboard you can see it looks like it's not actually updating everything properly it still says test name and when I go to edit you
3:05:08
can see it's still not properly editing this properly let's go back make sure yeah it's still not working let's check our database to see if that's working
3:05:15
cuz it could be something that's wrong with our caching so let's just bring this over check into our database we'll
3:05:20
go to our products table give this a quick refresh and we should see that the name is test name 2 so it does look like
3:05:25
it's updating properly we just have a problem with caching so let's bring this back to being a little bit bigger here what we need to do is on this page we're
3:05:32
essentially calling the git products function so let's look at our git products function to see how the cache for that is working I most likely just
3:05:38
implemented something slightly wrong in my caching so inside of here we're going to look at git products and git products
3:05:44
is based off that user tag right there same thing with Git products so most likely our update product is where the
3:05:49
issue is coming in revalidating our cach for the products tag user ID and ID that
3:05:55
does look correct let's make sure here we're using the products tag here for our get product we're using the products
3:06:01
tag so that again should be correct and we should be revalidating these things let me make sure that I actually
3:06:06
implemented the cache itself correctly this looks like it's passing along all of our different tags that seems correct
3:06:12
and our revalidate cache function let's make sure that is correct as well you can see here the get user T takes the
3:06:18
user ID first then our tag second that is what we're doing here same thing what we're doing here that all again looks
3:06:24
like it's 100% correct let's just give our page a refresh see if it implemented it no it's still not working properly
3:06:29
the next thing that we can look at to really help figure out if this is a caching problem is inside of drizzle we can actually log every time we make a
3:06:35
query so I can set my logger to true and now if I look at my logs inside of here
3:06:41
I just come up there now we should see a log inside of here every time I actually make a quer so if I refresh my page you
3:06:47
can see I got no log showing up if I go to my analytics page that showed analytics back to my dashboard you can
3:06:53
see it's getting the dashboard page but there's no database queries being made so it is something to do with our caching the next step if you have a
3:06:59
caching related problem is just to remove the cach completely so here I can just return Calling get products
3:07:05
internal with all the information user ID and limit now if this actually works
3:07:11
then it probably is 100% a caching problem there we go that completely updated it so we definitely have something wrong with our cash being
3:07:17
stored right right here this is why it's really handy to have that clear cach function cuz maybe there's something that's currently cash that we need to
3:07:22
get rid of so I'm just going to call clear full cach right here give this a quick refresh that'll clear out
3:07:28
everything inside of our cache at least it should but you can see it's still getting us the old information so I'm guessing why this is being cached here
3:07:34
is because it's getting us the information from before we properly set up our caching while we had it halfway implemented so I'm going to do is I'm
3:07:41
just going to close out of our entire application and delete the entire folder this will get rid of anything that's cached at all in your application
3:07:48
now we can just run this application back up and we can give this a quick restart again and hopefully now we'll
3:07:53
see that when we refresh the page that it will get the correct name and when we update it will also still give us the correct name so test name two let's go
3:08:00
ahead and we'll change this to three give that a quick save it looks like it's saved properly go back to our
3:08:05
products and it looks like it's still caching incorrectly the only thing I can think of is we need to check our update
3:08:10
product function and yep sure enough I have this set to less than instead of greater than stupid mistake there's
3:08:16
nothing wrong with our caching which is Le a good sign when I refresh we should hopefully see that this will be updated as soon as I make a new update because
3:08:22
now it'll revalidate my cach so let's change that to three click save it was saved go back and now it is set to three
3:08:28
so that was just me being dumb essentially why that didn't work so you shouldn't hopefully have that problem if you don't flip your greater than sign so
Edit Product Country Discounts Form
3:08:34
now we need to work on our country and customization tab because the details tab luckily was really easy so let's get
3:08:39
that back to that page that we were on I'm just going to close all of our tabs so we have something a little bit more fresh to work with over to that edit
3:08:45
page and I'm just going to copy down what that country tab is going to look like CU it's almost identical to what we have up here we essentially have the
3:08:52
country groups that we're going to be getting we'll implement this function in just a little bit we have a card description which kind of describes what
3:08:58
this particular page is doing and then we have our form which again we need to create so very similar to what we have up here we just have essentially a title
3:09:05
and description and a form and that's what this is right here so all we need to do is just take our country tab pull
3:09:10
it up into this section country tab need to pass it along a product ID which is our product
3:09:17
ID and a user ID which is our user ID and now we should hopefully see we get our
3:09:22
country discounts with obviously nothing being rendered because we need to get all the information for our country groups so we need to essentially
3:09:29
implement this function to get our product country groups and this needs to get us quite a lot of information so let's go ahead we'll copy that to
3:09:35
implement it and it's going to be implemented in the same place get product is implemented so it come up
3:09:40
here we'll just do it all the way at the very top why not export
3:09:45
function get product country groups this takes in a product ID and a user ID
3:09:52
pretty much the exact same thing we had here there we go and then what we want to do is make sure that this is product
3:09:59
ID and then inside this function just like we've done for all these other functions essentially we do the exact
3:10:05
same thing so we take our props which are these right here pass them into the cache function and make sure we call the
3:10:12
internal version of this function and then we need to set up all of our different tags now for now I'm just going to leave this tags blank because
3:10:17
we're going to come back and figure out what the tags are after we implement this function because really it's hard to write the tags unless you know what
3:10:23
you're using inside the function so here we're going to create a function it's going to take in a user
3:10:29
ID product ID make sure that we get those typed
3:10:37
properly there we go make sure I spell them properly too and now we can implement this function so for this
3:10:43
function what I want to do is I want to get all of the groups because essentially let's say there's 10 different groups group 1% or 10% 20% 30%
3:10:49
40% all the way up to 100% if there's 10 different groups I want to get all the groups and all the countries for the groups and I want to get any discount
3:10:56
codes that are currently associated with those groups so the very first thing I need to do is just make sure that the person has access to getting all of the
3:11:02
information for the country or for the product sorry so I can do that by very simply just calling the get product
3:11:09
function I'm going to get the product for a specific user and as long as I have access to that product it'll return
3:11:14
me a product otherwise if it doesn't it's going to return to me an empty array this is going to guarantee that the user has access to this information
3:11:20
then I can get all of my data and this is going to be coming from calling db. query and I want to query on my country
3:11:26
group table because for each group I want to create a row inside of this section so my country group table I want
3:11:32
to find many essentially I want to find all of them so I'm not even going to add a wear Clause because I want to find every single group inside of here and
3:11:38
for each group I want to get specific information for example I want to get all of the countries and for each country I want to get specific columns
3:11:45
the only columns I care about are the name name and the code column because I want to be able to use the name to
3:11:50
display what the country name is and use the code to render out a flag for that specific country so I got all my country
3:11:56
information the next thing I want to do is get all the discount information so for country group discounts inside of
3:12:02
here I'm going to get a bunch of columns and for each column I just want to get the coupon so coupon is true and I want
3:12:08
to get the discount percentage we'll set that to true so I want to get what is the coupon and discount that the user set for this thing that's relatively
3:12:14
straightforward then I want to set a wear Clause so here I only want to do this where my product ID which I'll just
3:12:21
specify as ID for the column name I want to do that where it is equal to whatever
3:12:27
product ID I pass into here so let me make sure I put that inside a parenthesis so it'll actually render properly there we go equals and I want
3:12:34
to do where my product ID is equal to that ID just like that so here essentially what I'm doing is I'm
3:12:40
getting all of my country groups and for each country group I'm getting individual countries for each of them so if this country group has seven
3:12:45
countries it'll give me all those countries and then I want to get the discount the user has associated with that country if they have one now they
3:12:52
may not have one but that's okay we'll just set the limit to one and if they don't have one it'll be undefined so now
3:12:58
we have our country group discounts and our country and that gives us our data and if we look at the type for this data
3:13:03
real quick we hover over this you can see we get all the information for our group we get all the information for the countries and we get all the information
3:13:09
for the country group discounts but again this could be null so what I want to do is I just want to map through my data return only the things I need in an
3:13:16
easy to use format so for each group I want to return this information so we'll say return I want
3:13:22
to get the group. ID I want to get the group name I want to get the
3:13:28
recommended discount percentage which is just group. recommended discount
3:13:33
percentage I want to get all the countries which is just group. countries
3:13:38
and then finally I want to get whatever discount is associated with this which is just the group. country group
3:13:44
discounts and I want to get the very first one so just say at zero so if I give that a quick save that should make everything in this file work properly
3:13:51
now we can figure out what our tags are going to be and if we look down here the things that we're querying our our product we're quering our country group
3:13:58
table and we're quering our countries themselves as well as the discounts now the discounts I'm associating with the
3:14:03
project or the product sorry because it's on the product edit page so this is essentially a product this is a country
3:14:09
group and this is our countries so what we can come up here to do is we can get a user tag and that's going to be
3:14:15
specifically for the user ID that we pass in here and we want to do it for our
3:14:20
products then the next tag that we need to do is actually going to be a global tag and that's because the user doesn't
3:14:27
have individual country groups or countries these are Global to every single user you notice when we do our filtering there's no filtering on the
3:14:33
countries and there's no filtering on the country groups we're getting all of them so that means it's a global tag so
3:14:39
ctags do countries and we need to do the exact same thing for our country groups
3:14:45
and we should just make sure we add those t tags so we can come in here this one is
3:14:53
countries and Country groups just like that so now that should hopefully clean up all those errors give that a quick
3:14:58
save you can see we're doing the tagging just like we want and actually I can make this more specific because I have a product ID so I might as well get the ID
3:15:05
tag based on our product ID just to make it as specific as possible so now I can actually use this let's minimize all
3:15:11
these functions down to make it easier to work with come back to here where I'm getting my product scroll all the way
3:15:16
down and I should be able to import this function and that's going to give me all of my essentially country group information the ID name the recommended
3:15:23
discount the all of the countries and the individual discount if there is one associated with that now with all that
3:15:28
information I can go ahead and build out this form with my ID and with that country groups so let's create this
3:15:33
function inside of our forms folder this is called Country
3:15:38
discount form. TS and that's actually country discounts and make sure it's TSX
3:15:44
I'm going to paste in just the typing so you can see here this is the same type we had from before just cuz it's easy to work with I don't want to have to type
3:15:49
that out for you and now we need to set up our form so we can say form is equal to use form just like that I want to
3:15:56
call that function and let's make sure that we import that now before we do that I want to go over here and make sure everything's imported properly so
3:16:02
let's import this function that we just created and it looks like we are getting an error here and that's because this is
3:16:07
a type of undefined that's not definable as null so let's just change this to undefined there we go that should clean
3:16:14
that up and we can even just make this an optional property that's even easier that should clean up all of our different errors and if we just make
3:16:20
sure from here we return something there we go there we go now we
3:16:27
got no more errors in this file which is perfect so now we can go ahead and actually start implementing this form so we can say Z from Zod we want to infer
3:16:34
the type of and we want to create a schema so we'll say product Country discount schema just like that and then
3:16:41
inside of this use hook form what we can do is we can pass along the resolver which is just going to be a Zod resol
3:16:47
that takes in that exact same schema and then the next thing we can do
3:16:52
is our default values now before we go about defining
3:16:57
these default values let's go ahead and create our schema so schemas inside of products here we can export a constant
3:17:04
for that name and this time we're going to return an object and this object is only going to have one property this
3:17:09
property is our groups and this groups is just going to be an array so we're going to return array essentially of
3:17:15
different objects so we'll say array of Z doobs and each of these objects is
3:17:20
going to have the country group ID this is the ID for each group that we're associating with this with so we're
3:17:26
going to have a string minimum of one and this is required this should never be missing though because we're going to
3:17:31
make it a hidden field in our form the next thing we need is our discount percentage and our coupon so I'm just going to copy those over paste that down
3:17:38
so our discount percentage is going to be a number the maximum value is 100% minimum value of 1% or we're saying that
3:17:45
it can be not a number and in the the case that it's not a number what we're going to do is convert that to undefined
3:17:50
and this is optional now I'll get to the point of why this can be optional in just a second the same thing with coupon this can also be optional now there's
3:17:57
some other refining we're going to do here in just a little bit but I'm going to leave that off until we build our form because then it'll make a lot more
3:18:02
sense so right now our form is just throwing a bunch of errors and not doing anything but as soon as we start importing different stuff we import this
3:18:09
let me make sure that this infer is coming through properly I believe this may just need to say type of in front of
3:18:14
it actually that obviously does not need to have type type of I'm just missing one of my angle brackets over here that
3:18:19
fixes the problem there we go now we have our default values that we can work on implementing as you can see the only
3:18:24
thing inside of here is our groups just like that but it does look like we have some errors going on that's because we
3:18:30
need to make sure we pass this inside of an object there we go that solves all those errors and now you can see that
3:18:35
the only thing we have inside of here is groups so to make those groups we can just take our country groups that we're already having passed in and we can map
3:18:42
through each of the groups and we can Define them exactly like we want so we come in here we can return an object and
3:18:49
this object needs to have a country group ID well that's just our group. ID that one's relatively straightforward we
3:18:54
need to have our coupon that again is pretty easy that's just going to be our group. coupon that's going to come from
3:19:00
our discount so discount. coupon but again this can be undefined so if it's undefined we'll pass along an empty
3:19:06
string then finally we need to do our discount percentage and this is where it gets a little confusing so up here I'm
3:19:12
going to say that our discount is equal to and first I'm going to get my group discount and if we don't have a discount
3:19:18
then what I'm going to do is I'm going to fall back to my recommended discount percentage so I'm either going to use
3:19:23
the currently defined discount by the user or fall back to whatever the recommended discount is then for my
3:19:29
discount percentage if my discount is not equal to null well then I'm just going to take my discount and multiply
3:19:34
it by 100 because our discounts in the database are stored between 0 and 1 and in the actual form we're storing them
3:19:40
between Z and 100 so it's easier for people to understand otherwise we're going to return undefined here as the
3:19:46
discount percentage now if we give that a quick save that at least gets our default values for our form now we can
3:19:51
actually render out what our form looks like so we'll get started with the basic form stuff we use the form component
3:19:57
from the form Library we need to have an onsubmit function there we go and that is going
3:20:04
to take in values which is z. infer and that's the type of our product Country discount
3:20:12
schema so let's just paste that in there so now at least we console. log our values out if we really
3:20:19
wanted to so now we have all that information we can close off our form and our other form to get our actual
3:20:25
thing working and now inside of here I just want to Loop through each one of our country groups so country groups.
3:20:30
map through each group and for each group I want to render out a card because this is going to be a card-based
3:20:36
layout and the key is the group. ID there we go and inside the card I don't
3:20:41
even need a header I just need the card content so for our card content I'm going to add a class name
3:20:48
here I want to make sure I import this so we can actually use class name pading
3:20:53
on the top of six to give it some space on the top we're going to flex with a gap of 16 and our items in the center
3:20:59
and that's because the left side of this is going to be all the flags and the right side is going to be all of the different input Fields so let's put in a
3:21:06
div that's going to render all of our left side content so we're going to have an H2 which is our group. name just like
3:21:12
that so if we give this a safe go over to our country Tab and we make sure we have everything imported properly let's
3:21:18
just give this a refresh to make sure again my problem is I need to make sure I use this as a client component now if
3:21:25
we go to our country we see that we currently aren't actually getting anything rendered out and that's because we don't have any country groups yet so
3:21:31
one thing that I'm going to do before we worry about adding country groups is I'm going to go back to this page I'm going to pass in essentially a placeholder
3:21:38
value so we know that we have some countries that we can store inside of here which is an array and inside this
3:21:44
array we're going to have a code so for example like us and a name United States and let's just
3:21:50
do another one inside of here code is going to be I in and we're going to have the name be
3:21:57
India there we go so now we have our countries being defined let's make sure that we also
3:22:02
Define our ID it doesn't really matter we'll just put in something like that
3:22:08
we're going to need a name this is group one we're going to need to have here our
3:22:13
recommended discount percent let's just say it's going to be 0.1 so that's 10% and then finally our discount if we have
3:22:19
one so we'll say the coupon is high and the discount percentage is going to be2
3:22:25
so we can obviously play around with taking this discount off and not but now you can see we have a group showing up inside this section and then we'll go
3:22:31
about actually making it so we have all of our groups but for now I want to get the form working pretty well so let's get our group name in place I'm also
3:22:38
going to drastically strength this down so for our class name text muted foreground text small font semi bold and
3:22:47
we'll put a low margin on the bottom of two and that's because directly below this is where we're going to put each one of our flags so we're going to say
3:22:53
flex and a gap of two and we're going to do a flex wrap now inside of here we
3:22:58
just want to Loop through all of our different countries so countries. map for each
3:23:04
country I just want to render out what that flag is going to be and to do that we're actually going to install a library called react country flag so we
3:23:12
can come in and we can use the react country flag component let's just make
3:23:18
sure that we import this so all the way at the top here we're going to
3:23:24
import from the react country flag Library you can use whatever Library flag you want really this just downloads
3:23:30
a bunch of svgs and what we can do is we can say that our country code is going to be
3:23:36
country. code and then we can specify we want to use an SVG and now if we give that a quick save you can see we get the
3:23:42
US and India flag showing up now there's tons of different libraries you can use for this for example another Library you
3:23:47
can use is just a URL right here for a source for an image so if I import this image from next image give this a save
3:23:53
you can also see if I were go to the country tab I now get the flag showing up this way personally I actually like
3:23:59
this image source a little bit better and this is just another flag Library this is country Flag icons so if you
3:24:05
search for Country Flag icons you'll get this exact URL and I'm just pasting in my country code uppercase it and then
3:24:10
getting the SVG I personally find that these icons look a little bit better on a smaller screen size so I'm going to be
3:24:16
specifically using these icons instead of the ones in the react country flag library but again you can use whatever
3:24:22
Library you want for this particular use case so now we have all of our flags as well as the group name showing up that's everything inside this div the next
3:24:28
thing I want to do is I want to add a hidden input into our field so we're just going to say type is hidden and
3:24:34
then we can just register this input manually so we can say form. register and this is going to be at
3:24:39
groups Dot and then whatever our index is Dot and then this is going to be what
3:24:47
the field is which is our country group ID just like that make sure I close off my input and I make sure I import this
3:24:54
there we go so now this is just giving us a hidden input at this index I want to make sure I get the index just like this so
3:25:02
that way when we submit our form we'll actually know what the country group ID is without manually having to type it in
3:25:07
so there we go we have our group one showing up now we want to create our form Fields off to the right hand side here so we'll create a div we'll give it
3:25:14
some class names margin left of Auto just push it all the way to the right we want to make sure it doesn't shrink down
3:25:19
and we want to make sure it's a flex with a gap of two and we'll do Flex column as well so they can stack
3:25:25
vertically on top of each other and the W is going to be minimum so that's going to make this div shrink as much as possible now there are two things that
3:25:31
I'm going to put the first thing is going to be a div that contains all of our different inputs and then below that
3:25:36
I'm going to have a form message to display any error messages that I have and this error message is going to be at
3:25:42
the root level of our application so form state. errors. groups at our particular index get any root level
3:25:48
errors and that's because when I mentioned that we have extra validation we need to do inside of here that's what I'm going to put inside this root
3:25:54
section right here now what I want to do next is style what our inputs are going to look like so we'll say a flex with a
3:25:59
gap of four to space them out from one another and now I'm going to paste in this input for our coupon you can see this is stuff that we've all done a
3:26:05
million times before so let me just get all these Imports in real quick there we go oops didn't get that
3:26:13
in there properly there we go so I just have a form field the group is just going to be the group at the index and
3:26:19
this is my coupon field so it's our coupon and the width is going to be 48 we don't want it to be too big now I'm
3:26:24
going to do the exact same thing by copying down another input field as well this one is going to be for my discount
3:26:30
and I believe it's called discount percentage just like that there we go that's our name this is going to say
3:26:36
discount percent aside of here the class is going to still be a 48 width but I
3:26:41
want to change a few things about this for example I want to specify how my value is going to be set that should just going to take my field. value or
3:26:48
it's going to set it to an empty string and then my on change what I'm going to do here is I'm going to get my e and
3:26:54
then I just want to say field.on change and want to specify e. target. value as
3:27:00
number and this is just going to make sure that it's going to convert this number input the string that it gives back to me into a number for me to save
3:27:07
then again I have my class with a width of 48 in my case I'll make this one quite a bit smaller at 24 and then I'll
3:27:14
specify a minimum of 0 and a Max of 100 there we go give that a
3:27:19
quick save and now you can see my discount percentage and my coupon and they're both being set to high right now which is obviously not correct so I have
3:27:25
something mislabeled let me just give it a refresh see if that fixes it there we go discount at 20 coupon at high and if
3:27:31
I make my screen a little bit larger you can see all the flags are showing up really nicely now if I go over here and I get rid of this discount we should see
3:27:38
the coupon goes away and the discount percentage changed to 10 so let's give that a refresh go to Country you can see discount percent falls back to the
3:27:44
recommended and my coupon goes away completely and this is why I made it so that the coupon field is optional and I
3:27:50
also made it so the discount field is optional because if you don't have a coupon you don't need a discount to be able to be passed in now it does look
3:27:56
like I have some issues right here with this showing up is not a number and so on so I'm going to go about and try to fix that right now I think all we need
3:28:01
to do for fixing that is here where we're doing the field value we can say if the field value is not a
3:28:08
number then we're going to render out an empty string otherwise we're
3:28:14
going to render out our field value there we go and also I believe our field value could be undefined so we'll
3:28:21
say here field. value if it is
3:28:26
undefined then we're going to just do whatever is inside of here so this should hopefully just be a number nope
3:28:32
it's actually only undefined there so of course we'll do a check here if it's set to null then we're going to do all this
3:28:37
is Nan Shenanigans put all that inside of parenthesis otherwise we're going to
3:28:43
render out if it's not null the field. value there we go and here I should say
3:28:48
if it's not null then we want to do this check here and if it is null then we're going to print out an empty string just
3:28:54
like that there we go so now you can see that that got rid of that problem and to clean up our code a little bit we'll say if the field that value is not equal to
3:29:00
null and if it is not Nan then we're going to render out field. value
3:29:07
otherwise we'll render out an empty string so if the value is null or it is na an we'll render an empty string so
3:29:13
now we'll give that a refresh go over to Country you can see looks like we still have a problem and I believe the reason for this is because I
3:29:19
need to make sure that this input field is a type of number that should solve all my different problems let's give
3:29:25
that a refresh go over to Country you can see I can delete this I can type in numbers everything's working perfectly
3:29:31
fine I believe I can even simplify this code by bringing it back to that double question mark syntax and following it up
3:29:38
with here there we go this should hopefully be much simpler and still work let's make sure that works come in here
3:29:45
delete that type in yes that is still working just fine so a much simpler version of our code so now the final thing we need to do below all of this
3:29:51
section after our card content after our card literally after every single thing right before our form ends we'll just
3:29:57
add a button that allows us to save this information import the button and now if we go over to our country give this a
3:30:03
save we scroll down you'll see that we have a save button all the way down here which is exactly what we want we can
3:30:08
click save and it's going to run some code right now all it does is console log out our values so what we need to do
3:30:13
is instead of hardcoding this information we need to actually get this information from our database which we're already doing but right now
3:30:20
there's no data in our database so this is completely empty so we need to write some code that allows us to import all
3:30:25
of our different country groups into our database because this is information that never changes really unless a country drastically increases or
3:30:31
decreases its purchasing power and it's the same for every user on our site so first of all we need to get all of the
3:30:36
data for the different countries I'm just going to paste in a file here called countries by discount. Json this gives us a name a recommended discount
3:30:43
percentage and a list of all the different countries that fall into that group and it does it for every single group of countries as you can see if you
3:30:49
want to get this exact file I'll have it inside of the GitHub repository so there's all of our countries by the different discount and then what we want
3:30:56
to do is we want to create a task so I'm going to create a folder called tasks just like this and inside this tasks
3:31:02
folder I'm going to create a file called update country groups. TS and this is a
3:31:07
task that I can run that's going to read all the contents to this file and update all of my country groups based on that
3:31:12
information so I'm going to create a function called update country groups
3:31:17
I'm going to create a function called update countries and this allows me to update both of these different sections so I'll just call this in a wait and a
3:31:25
wait just like that now you will notice I'm getting an error essentially on all of this stuff I need to make sure I use imports and exports to do all of this so
3:31:31
let's coming down here let's create the async function update country groups just like
3:31:38
that that'll clean up some of those errors and the very first thing I'm going to need to be able to access is my database so we might as well just import
3:31:43
that right into here now you will notice it says top L weight is not valid unless I have some set of es modules or so on
3:31:50
being enabled inside my typescript so we can go ahead and enable that so in RTS config here right now we have certain
3:31:56
things seeing set really far in the past and that's because we don't have a Target being defined this is the Target that our code compiles down to we're
3:32:03
going to say es 20107 that's the earliest that you can actually do top level weight and there shouldn't be any
3:32:08
code that's you know relying on 2017 features or Beyond so here we go that fixes our top level weight and now we
3:32:14
can go ahead and actually write this function so first I need to get the data I'm going to insert so this is going to be called country group insert data I'm
3:32:22
going to set that to countries by discount and this countries by discount
3:32:29
is something that I need to import and that's coming from the SL dat
3:32:35
countries by discount Json so I can Loop through each one of these by mapping through each one and for each one of
3:32:41
these I'm going to be getting a name and I'm going to be getting a recommended
3:32:47
percentage let's see that is recommended discount percentage there we
3:32:54
go and that's going to give me a function and inside this function all I want to do is return combining those
3:33:00
together so name and recommended discount percentage so essentially I'm just removing the countries portion of this information and now I have an array
3:33:06
with names and recommended discount percentages that I can insert into my database so I can say my row count is
3:33:14
equal to calling DB Dot and I want to insert into my country group table since
3:33:19
I have all the information I need for it I want to insert specific values and the values I want to insert is that insert
3:33:25
data that I just created now this is actually going to work but I want to make sure that this also works for updating my information so if I run this
3:33:32
file twice in a row it'll still work so in that case I can do an on conflict on on conflict I actually want to update
3:33:38
things so first of all you have to specify the target this is the thing you're searching for in our case whenever our name is the same that means
3:33:45
that I want to do an update instead so if my name is the same then I want to update that recommended percentage so
3:33:51
here I call the set function and this allows me to set specific things for example we don't need to worry about the
3:33:56
name because we know the name is the same but what we can do is we can say that we want to set the recommended discount percentage and the easiest way
3:34:03
to update this is by using this SQL do raw function and this allows you to pass in a string and we can pass in the
3:34:10
string called excluded Dot and then we pass in whatever the name of the thing we want to do is so our case it's the
3:34:16
country group table. recommended discount percentage. name so what this fancy line of CSS is essentially doing
3:34:23
is it's saying okay insert into my country group table all this data and every single time you find a duplicate
3:34:29
should make sure you update only the recommended discount percent and this excluded dot syntax is just saying hey
3:34:35
get whatever the value of the recommended discount percentage would have been for the insert and instead use
3:34:40
that for the update it's a relatively complex line of code but it doesn't really do that difficult of things now
3:34:47
obviously after this we need to revalidate our database cache in our case we only have a global tag to work
3:34:52
with so our cash tags. country groups we want to revalidate our cach for that and
3:34:58
then what we can do is we can return our row count just like that so this is going to show us all the things that
3:35:03
were updated so we'll say group count is equal to that and we can do some kind of
3:35:09
log for example I'll just copy over the log just like this updated this many group counts and this many countries and
3:35:15
here we we can say our countries is equal to that so this is just telling us how many of those different things we
3:35:20
updated so first we update all of our groups and now we can go ahead and update all of our countries so this is
3:35:26
going to be update countries just like that again it's going to use this exact same countries by discount array that we
3:35:33
have up here so first I want to get our country groups so that is actually going to be coming from our database just like
3:35:39
this and you will notice here I'm okay with using my database queries in this specific file because this is code
3:35:45
that's not part of our application this is outside of our application we're never going to call this code from our application so it's kind of its own
3:35:51
unique entity I want to keep it as separate as possible from the rest of our code so that's why I'm okay with using a database directly inside of here
3:35:59
now I want to get our insert data country insert data is equal to and again Loop through that array I want to
3:36:06
use a flat map this time because I want to convert that array of countries into a single array instead of a nested array
3:36:11
and this is going to return to me countries and it's going to return to me the name which is the group that they
3:36:16
are a part of now the next thing I want to do is take each one of my countries and I want to Loop through each country so now I'm looping through each
3:36:22
individual country and mapping them into their own array let's get the country group for this country which is just
3:36:30
country groups find the group where the group.
3:36:36
name is equal to our name make sure I spell that all properly and I can even move that up to here so we can get the
3:36:43
country group once for each set of countries and if for some reason our country group is null I want to throw an
3:36:48
error this should never happen it should be completely impossible but just in case we're going to put that error in there then down here I can just return
3:36:55
an object that has the name which is my countryname we want to get the code
3:37:01
which is just country. code and I believe it's called the
3:37:06
country inside of my array of data and then finally the country group ID is
3:37:12
just country group. ID there we go so that's all the data we want to insert just like up here we essentially need to
3:37:18
do the exact same line of code so I'm just going to copy that down but instead of into the group table we're going to
3:37:23
be inserting this into the country table just like that and this is my country
3:37:29
insert data and again this is my country table and instead of using the name I'm going to use the code as the uniqueness
3:37:35
indicator now here I want to change my name I want to update that from my country table so anytime that I have a
3:37:43
code that's the same I want to be able to change my name and I also want to change instead of
3:37:48
here the country group ID so again update only these fields if the code
3:37:53
already exist that way if I run this update function multiple times it'll only update the ones that have changed
3:37:58
now down here I want to update the cache for my countries and that should be all that I need to do and now this is going
3:38:04
to add information into my database for all of my different countries so now inside my package Json I can just make a
3:38:10
script that lets me run this so for example DB update country groups and this is going
3:38:17
to run TSX with an environment file
3:38:22
ofv and it's going to run the file inside my source folder inside tasks inside update country groups. TS now I
3:38:31
can just run this exact command npm run DB update country groups just like that
3:38:37
and that should run my command but of course I have to install TSX first so npmi this is a Dev dependency TSX that
3:38:45
allows me to run typescript files without actually doing anything else and now we can click run on that and you can see we are getting some errors showing
3:38:51
up again top level weight is not supported with the CJs output format now I just need to come in here change my
3:38:57
type to module that should fix that problem now let's give this a quick run and hopefully that should work but again
3:39:03
we're still getting an error react does not have an export named cache this is unfortunately a bit of a trickier
3:39:08
problem to get around and the reason why this cach export is not there is because the current version of react does not
3:39:14
have this cash export it's only available in the canary version it should be out in react 19 which is not
3:39:20
quite out yet and the reason we can use it though is because we're using nextjs but when we run this file outside of
3:39:25
nextjs it doesn't know about that cache so for now the best way to get around this is just to remove everything
3:39:31
related to the caching so we're going to remove the revalidation of our cach here and we're going to remove the
3:39:36
revalidation of our cach here and if we run this function we're just going to need to make sure that we manually clear out all of our caching information which
3:39:43
is not that big of a deal again in future versions of react when this is actually a function that you can use you
3:39:49
won't have to do this but right now we do have to do this while we wait for react 19 so now let's go ahead and try
3:39:54
to run out that file so we can come in here whoops run that file again and hopefully this time it should work as
3:40:00
you can see it printed out all of my database queries as well as it said we updated 10 country groups and 192
3:40:06
countries so it did look like it worked just fine now to make sure that we don't have any caching problems to worry about
3:40:11
I'm just going to manually update my cache so inside of whatever country or component I was working on so let's just
3:40:17
come over to this page right here I'm just going to call the Clear full cache function refresh my page that should
3:40:22
have hit that function and now hopefully our caches are cleared so now if we go to the country tab it looks like it's
3:40:28
still not pulling in all of our different country groups let me just make sure again we are clearing the full cache calling that function give this a
3:40:35
refresh go to this page refresh still doesn't look like it's actually clearing the cache and if we check to see if we
3:40:42
are hitting the database we refresh our page it looks like it's not hitting database at all so our cach is not being
3:40:47
properly cleared let's go back to the page we're on before let's make sure that our caching is working properly so we can go over to our lib folder inside
3:40:53
the cache we should see the revalidate for clearing is revalidating the star tag
3:40:59
and every single one of our things should have the star tag if they're inside of our DB cache but it doesn't
3:41:04
look like that's working as expected the next best thing that we can do instead of having to worry about figuring out that caching issue because it could just
3:41:10
be something that's stored in the cache from before just delete thex folder that'll clear out the cache and restart
3:41:16
your server there we go that should fix any of those particular problems we were running into now when we're on this edit
3:41:22
page should grab everything from scratch and hopefully we won't have any caching problems going forward so now in our
3:41:27
country tab you can now see that we have all of our different country flags the recommended percentages and the coupon
3:41:33
code and that's for every single group that we have which means that all of our code is working flawlessly and if we click save you should see it allows it
3:41:40
to actually save but right now it's not doing anything cuz we're not calling any particular function so let's go ahead and work on calling a particular save
3:41:47
function and then I can talk about why I wanted to be able to leave coupon and discount blank because for example what
3:41:52
if I don't want to add a coupon for this group well I want to be able to leave that blank that's why I left that field as optional same thing with the discount
3:41:58
if I don't include a discount or a coupon I don't want to include anything for that group the only time I want to throw an error is if they type in a
3:42:04
coupon but don't add a discount obviously in that particular scenario I want to throw an error so let's write a
3:42:09
schema for that we already have our schema I just want to add some validation to that particular schema so inside of our schema I'm going to add a
3:42:16
statement for refining that schema so if we look at this code all I'm doing is I'm checking okay do I have a coupon that essentially means that my coupon is
3:42:22
not n and the length is greater than zero also do I have a discount code which means it's not equal to null as well essentially what I'm saying is if I
3:42:29
have a coupon code and I do not have a discount then throw an error and I just want to say a discount is required and I
3:42:35
want to put that at the root level and the reason I put that at the root level is because when I render out my form
3:42:40
message if I pull this down and look down here I'm rendering it at that root level so now if I were to try to save
3:42:47
this I can actually demonstrate that by deleting the discount having a coupon I'll refresh my page so I get the most
3:42:52
upto-date information put a coupon on here click save immediately I get an error a discount is required if a coupon
3:42:58
code is provided as soon as I put in a discount and then I reclick save you can see that error goes away and it tries to
3:43:03
save my form but of course we're not doing anything when we save our form so that is our next step now this saving
3:43:08
code should probably look pretty familiar to you I'll just paste it in we're going to call this update country discounts function which we'll create in
3:43:14
just a second and then we're going to make sure that we've render out a toast message depending on if we have a success or an error State given back to
3:43:20
us so I'll come all the way up to the top make sure I say const toast equals
3:43:26
use toast there we go so now we actually are able to render out toast messages now we can work on creating this update
3:43:31
country discounts so we're going to go into the actions section so inside of our server our actions for our
3:43:39
product export an async function which is called update Country discount and
3:43:45
for the parameters I'm just going to copy those over so you don't have to watch me type them it's going to take in an ID and it's going to take in all of
3:43:51
our schema data then we can do the same thing we've done for create and update and all those other ones I'll just copy
3:43:56
this down we essentially wanted to First compare this to our schema parse the
3:44:01
data and if it's correct we get our data otherwise we're going to throw an error message there is an error saving your country discounts there we
3:44:10
go then after that we can create our insert data and our delete data so this
3:44:15
is going to be a little bit complicated I'll paste down the code and then explain exactly what's going on in just a second so for each of our country
3:44:22
codes whenever we submit our form we're going to be submitting this entire form so we're going to submit every single group with every single discount and
3:44:28
every single coupon code and we just need to check okay is there a coupon and a discount then we need to insert this
3:44:35
data into our database and if there is not a coupon or not a discount we need to delete that information from the
3:44:40
database wherever it exists so that's what this is doing I'm first getting all the rows to insert and then I'm getting all the rows to delete so first of all
3:44:47
the insert data I can come down here and for each one of my groups of data so each one of these cards that has a
3:44:53
coupon and a code and a group number I'm first checking is my coupon equal to null or my length or my discount
3:44:59
percentage or my discount percentage essentially do I have a coupon and do I have a discount percentage if I do
3:45:05
insert this into my insert data where I'm just inserting my group ID my coupon my discount percentage of my product and
3:45:11
again I'm converting that discount percentage to a number between 0 and 100 so if I have a coupon and a discount
3:45:17
percentage add that to the insert rows otherwise just add the ID that I want to delete to the delete row then what we
3:45:23
can do is we can actually call our database and we can do all of our inserts and we can do all of our deletes and some of these inserts might actually
3:45:29
be updates it really depends so then after we get all of our data grouped between inserts and deletes we then need
3:45:34
to call the update country discounts function from our database again because we're essentially doing the same thing
3:45:40
we've done up here update country discounts and I want to call the
3:45:45
database version again just calling out to that database to handle all the database stuff for us and inside here I want to get all of my delete groups I
3:45:52
want to get all of my insert groups so we're going to say insert just like that and then finally I want to pass it along
3:45:58
the product ID and I want to pass it along my user id as well so the product ID I know is
3:46:05
just ID just like that and I already got my user ID at the top all the way up here and that's just to make sure we
3:46:10
have all of our different validation and stuff in place and I can just await this function now I need to create this
3:46:15
function so we're just going to go to the file where that function will be defined that's inside of here export an
3:46:22
async function with that particular name I'm going to copy over the actual data
3:46:27
types for the things we're inserting into the data so give that a quick save there you can see we have our delete Group which is just an array of IDs we
3:46:34
have our insert Group which is just an array of insert data and we have our product and user ID now inside of here
3:46:40
first I want to get our product so we can get our product and if they don't have a product then we want to essentially return null or return false
3:46:46
or something we'll just return false or whatever and just saying hey we could not update any of this information
3:46:51
because you don't have access to this product if you do have access to this product though then what I want to do is I want to create a batch so I'm going to
3:46:58
create a bunch of statements which is batch items and these are going to be of the type PG because we're doing
3:47:04
postgress data here I'm going to get an array of those and I'm going to set it equal to an empty array then what I'm
3:47:09
going to do is if I have anything to delete so if my delete group is not equal to null
3:47:15
and my delete group. length is greater than zero then I know
3:47:21
I have data that I want to delete of course these should not be able to be undefined I don't know why I have that set to be undefined so we're going to
3:47:27
remove that and essentially we can just check if our length is greater than zero then I want to run code to delete
3:47:33
information so inside my statements I'm going to push a new database query so we'll say db. delete I want to do a
3:47:40
delete from my country group discount table and I I want to do it where
3:47:45
specifically certain criteria is true so I want to do an and query here I want to do it where my country group discount.
3:47:53
product ID is equal to the product ID that I pass in so first of all for the
3:47:58
product that I'm currently editing I want to be able to do that particular row and I want to make sure that in an
3:48:04
array I want to check my country group discount table ID for the group and I
3:48:09
want to check to see if that's in my deleted group array so for each one of these I'm going to map them to just
3:48:14
getting the individual ID so group is group. country group ID so what this
3:48:20
code is doing right here is I'm deleting all of the rows from my discount table for this particular product where the ID
3:48:27
for the group is inside the array of deleting IDs that I want so essentially everything I marked as deletion is going
3:48:32
to get deleted inside of this statement then the next thing I can do is handle my insert group so if my insert group.
3:48:39
length is greater than zero then I want to run a bunch of insert code and put
3:48:45
push that into my statements so statements. push DB do this one's going to be an
3:48:51
insert in my country group discount table the values is just going to be whatever my insert data is so I think I
3:48:58
call the insert group and then if there's a conflict I want to do a specific update to this information so
3:49:03
let me make sure I get my parentheses in the right place and then I'll explain exactly what this particular line of code is doing so on conflict if for
3:49:10
example I already have a row in my database for this product ID and this country ID well then I just want to
3:49:16
update my coupon and update my discount percentage that's all this is doing so it's inserting new rows but if there's
3:49:21
already rows for that group and that product then I just want to update the coupon and discount that I added into
3:49:26
that section so now I've essentially created my two statements and if my statements. length is greater than
3:49:36
zero there we go greater than zero well then I want to run some code so I can say db. batch
3:49:43
that's going to run all my code going to pass in my statements now this will give me a typescript error because this expects
3:49:50
the element to have at least one thing in the array we've already checked for that so I can just essentially cast this
3:49:56
to be batch item of whoops PG just like that and
3:50:02
that's essentially telling typescript I know that this element has at least one value in the array once that's done we
3:50:07
can revalidate our cash we know what the tag for this is going to be is going to be cach
3:50:15
tag. product because anything on the product edit page I consider a product user ID and the ID is our product ID
3:50:24
then what we can do is we can return any type of validation that we want from here so for example equals this
3:50:32
information this is going to return an array of data actually so we can get from the first one our row
3:50:38
count and the second one is going to be a row count value as well but honestly we really don't care about this
3:50:45
information we know that if we ran through all this code that's really all that we care about it being successful we don't care about anything else so
3:50:51
back in our actions where we had all of our code inside here we should see that we don't have any errors I just want to
3:50:56
make sure I spelled all this right update discounts DB looks like I did spell that incorrectly so inside of the
3:51:03
database this should not have DB inside of it there we go that cleansed up our code in here so this is working now here
3:51:09
we can import this from the actions just like that that should be the action one that I imported looks like it is and
3:51:16
that should be working just fine and this is going to return to some data but it says that this data could be undefined so we'll make sure that the
3:51:22
data is not undefined by at the very bottom here after this runs we want to return error false and then we can put
3:51:29
down a message that says country discounts saved so if we give all of this a save come over here refresh our
3:51:35
page we should be able to actually set some coupons so let's say that this one's going to be C1 for our 60% down
3:51:41
here for 40% we'll set that to C2 let's actually change it to 32% and down here we'll create a brand new one with a C3
3:51:48
value so we should hopefully see all these different values when we click save you can see it says our country
3:51:53
discount saved we'll refresh our page go back to here C1 was saved for 60% C2 at
3:51:58
32% and C3 at 12 and if I change this to be like 2% and I resave you can see when
3:52:04
I refresh my page it'll go through and it'll properly update this that's why we have that on conflict due update
Start Edit Product Customization Form
3:52:10
statement so now we can finally move on to the final tab this one's quite a bit easier don't worry this this country one
3:52:15
was by far the most confusing so what we can do is we can go back to our edit page I'm going to paste in essentially
3:52:21
the section for customization I'll comment out the things that we are not able to handle right now because we're
3:52:26
going to get to them in just a little bit but essentially it's the same thing we're rendering out a card with all of our information and we're getting all
3:52:31
the stuff from our database and rendering it out the form so if we give that a save refresh our page you'll see
3:52:36
if I actually make sure I use this customization tab up here import the information we need
3:52:43
which is our product ID so we can get that from our product ID and our user
3:52:49
ID user ID now you can see it says Banner customization and obviously we can get our information from our
3:52:55
database so the very first thing I want to do is handle getting our product customization from the database based on
3:53:00
our product and user ID and again we're going back to the exact same database file to implement this function so
3:53:07
export function paste in the name here this is taking in the exact same props
3:53:13
and it's essentially doing the exact same same thing as this function paste that down there we go so
3:53:19
all we're needed to do is just call the internal version of this function there we go now again I'm not
3:53:27
sure what I'm going to need for my tags just because I haven't written this function yet but I'm pretty certain all we're going to be doing is updating
3:53:33
information from our product so I'm going to put the ID tag for the product we'll come back to that if we need to update it now we can come down to the
3:53:39
bottom here and we can put in that function if we want async function get
3:53:44
the name of it and again the props are the same as this one so I'm just going to copy the props over so we don't have to type those out there we go now this
3:53:51
function is incredibly straightforward because all we're doing is we're just quering our product table and getting
3:53:56
the very first product for our product ID and our user ID and we're returning with that our product customization that
3:54:03
straightforward then what we can do is we can return our data. product customization and if our data is null
3:54:10
it'll Return To Us null here so really all the code we're doing right here minus this wi section right here is
3:54:15
exactly the same as getting a product we're just making sure we're tagging on the product customization and returning
3:54:20
only the product customization from that section so that gives us our product customization that was by far the
3:54:26
easiest thing we've done in a while and here we can just make sure we import that function and we'll now have access
3:54:31
to that customization and if it's null we return not found but again this should not be null now the next thing we
IMPORTANT: User Permissions
3:54:37
need to focus on is how we deal with permissions this is kind of something we've been ignoring up until this point
3:54:42
and to really focus in on the customer ization section we need to focus on permissions because there is a permission for being able to remove The
3:54:48
Branding from this and luckily I have a really bulletproof and easy way to handle permissions that I'm going to show you right now so the first thing I
3:54:55
want to do is inside of a folder for my server so we'll go all the way down to our server folder create a brand new
3:55:00
file called permissions. TS and inside this permissions function I'm essentially going to export a bunch of
3:55:07
asynchronous functions for what we want to do so in our case async function can remove
3:55:15
branding there we go and this is going to take in the user ID which is a string so I'm just saying hey can this
3:55:20
particular person remove The Branding well the first thing I need to do is if my user ID is equal to null then I'm
3:55:27
going to return false and I'm going to make sure that this could be also null this is just making it easier for me to
3:55:32
actually call this function because if I don't have a user ID it'll always return false this again is just a yease of use
3:55:38
thing then what I can do is I can get the tier for the particular user that we stored in our database so we can call
3:55:44
user subscription tier with our user ID we need to create this function inside
3:55:50
of that DB folder here so we have a create function we need to get a
3:55:55
function for getting a particular tier and this takes the user ID which is a
3:56:01
string now this function is actually going to piggy back off of a second function I'm going to create called get user subscription and this will allow us
3:56:07
to get just an overall users subscription and this again is going to be just like all the other stuff that
3:56:13
we've done in inside of our application where we have an internal version of it so function just like this user ID which
3:56:20
is a string and this get user subscription tier is essentially just going to call get user subscription and give us just
3:56:26
the tier portion of it so I'll actually show you exactly what that code looks like we're going to get the subscription from here and we're going to get the
3:56:32
tier and return that to the user based on our subscription tiers so our subscription tiers if you don't remember
3:56:38
properly is all of our different tiers free paid and so on and it includes information like can I remove the branding can I customize the banner and
3:56:45
so on so that's essentially what this entire section is going to be talking about now to get this code to work we need to make get user subscription work
3:56:51
by making get user subscription internal work so this function is actually a relatively easy function we're just
3:56:56
going to return db. query and we want to query our user subscription table we
3:57:01
want to find the very first one where let me make sure I pass in all the information we're going to need into
3:57:08
here we want to get our clerk user ID and the equal functions and we're going
3:57:14
to check to see if the clerk user ID is equal to our user ID so just give me the user subscription for this particular
3:57:21
user then inside of here we're just returning that information and we're caching it based on the user tag just
3:57:26
like that and then if we come down here you can see we get our user subscription tier all we're doing is getting the
3:57:32
subscription if it's null we're throwing an error because they should not have a null subscription and then otherwise we're getting all the data for that
3:57:38
subscription based on the tier free basic and so on so now back into my permissions when I call that function
3:57:45
now I have this tier that has all the information on what they can and cannot do so I can just call this and return
3:57:51
can they remove branding that's as easy as this function gets it's actually so straightforward that the next two functions for customizing the banner and
3:57:58
accessing the analytics are the exact same lines of code the only thing that changes between them is what I call down
3:58:04
here is it can access analytics can customize Banner or can remove branding so that's what I need to do for this basic set of permissions now back over
Finish Edit Product Customization Form
3:58:11
to here I can just call that function with my user ID and now I know what whether or not I can remove this or not
3:58:16
same thing down here if I comment this in I have the can customize Banner function again I call that and I can see
3:58:22
whether or not I can actually customize this and I can even move this await statement into here if I really want to just like that relatively
3:58:27
straightforward now I just need to create my form itself so inside my forms let's create a brand new and actually
3:58:33
our final form for the entire project customization form.
3:58:39
TSX I'm going to paste down the typing information because again this is not super important for you to learn how to
3:58:45
type out this is just all the different things that we're passing into this particular function that we want to use now before we go ahead implementing this
3:58:51
function what I want to do is first import this here so at at least know that that is working you can see all the
3:58:57
errors were removed which is great now if I refresh this page you can see it renders obviously there's nothing in our
3:59:02
form but it's working now if we go over and to our schema we're going to be implementing the last and final schema
3:59:08
of our entire project as well and that's the product customization schema this one's super easy essentially we want to
3:59:13
build to modify the class prefix background color text color font size message that's showing up Banner container and whether or not it is
3:59:20
sticky that's how easy this entire thing is now if we go back down to our form we can use this schema just like we've done
3:59:26
with all of our other forms so we can use the use form hook just like we were using before I'll make sure to import
3:59:32
that I'll import the Zod resolver and I'll import our schema as well as you can see here we're using that hook for
3:59:39
used form we're passing along our schema and our default value is just all of our customization and if our class prefix is
3:59:45
null since this is the only thing that can be null we're converting it to an empty string so it works properly inside of our form now we have our form let's
3:59:52
go ahead and get an async function called onsubmit and this onsubmit
3:59:57
function just takes this as our type so we're going to have data actually I think we call it values there we go and
4:00:05
then inside of here we can do whatever we want console log our values for now it doesn't really matter then what we
4:00:10
can do is we can go ahead and Define our form just like we've done in the entire rest of our application get that from
4:00:15
the right place pass in all of our form
4:00:21
data there we go and then we need to render out the actual form component itself with all of its different props
4:00:27
and these props are pretty much the same props we've been using the only difference is I added a margin top of eight and I also have things being laid
4:00:34
out in the column direction for Flex actually that's the same as before but the only difference is a margin on the top of eight and that's cuz I want to
4:00:39
put a banner at the top of this section so I want to show you like what the banner is going to look like this is
4:00:45
essentially going to be our Banner for now it'll just be an H1 that says banner and right now none of this is working
4:00:50
because it needs to be a client component there we go so now you can see
4:00:55
we have our Banner showing up which will happen in a bit and then we have our form so for our form it's going to be
4:01:01
broken into two halves so we're going to use a grid with a gap of eight grid columns is going to be one on small
4:01:07
screen sizes or on larger screen sizes we'll set the columns to two and then on
4:01:13
our left hand side side we're going to have essentially our giant message so div here with a class of flex and
4:01:19
actually I can completely remove this div because we only have one thing on the side and that is our form field and our form field is going to obviously
4:01:26
have our normal properties of control which is our form. control we're also going to have our name and this is going
4:01:32
to be our location message and then finally our render prop for rendering out our field so
4:01:38
field render this out and inside of this particular field if I make sure I spell everything properly
4:01:44
we have our form item there we go inside of here we have our form label which is
4:01:50
our PPP discount message then after that we're going to have essentially a star
4:01:57
that we're going to call our required label icon this is something I should have also put in the details section
4:02:02
because the name the URL are required so let's go ahead and create this real quick while we can it's a rather simple
4:02:07
component this is something we can use anywhere in our application so I'm going to put it in my normal components folder
4:02:12
here required label icon. TSX just like that it takes in no props
4:02:20
at all other than it can take in any props really so we'll say class name and we'll say all the additional
4:02:26
props and that's just because I want this to be all of the props that you would normally get with the asterisk icon which is the icon that I'm going to
4:02:33
use so here this is just saying give me all of the normal props that the asterisk icon can use and that's because
4:02:40
inside of here I'm just going to return an asterisk icon and I'm going to pass in all of those props and I'm also going
4:02:47
to pass in a class name and this is where I'm going to Define my own custom class names so CN this is going to be
4:02:52
text destructive it's going to be inline a size of three and I want to align this
4:02:57
on the top finally I want to pass in what additional class names are passed into this function so all this is doing
4:03:04
is rendering out a red Aster icon with the ability to customize further if needed so now I can put that icon into
4:03:10
there and there we go that should be all I need I'm just going to put it directly inside my form label I'm also going to go back to my details form and add this
4:03:17
in there as well so this description is optional so inside of here the name that's required and the URL here is
4:03:25
required import that give it a save and now you can see we get this nice red asteris for those things that are
4:03:31
required which is great now we can go back to the customization form and finish this out so underneath our label
4:03:36
we're going to have our form control and inside this form control we're going to have a text area and this text area is
4:03:43
going to be disable if we cannot customize our Banner so we have our can customize Banner if we can't it's going
4:03:49
to be disabled we're going to have a class name here which is a Min h of 20 resize none and then finally all of my
4:03:56
different field props just like that close off the text area and now you can see we have this text area shown up and
4:04:02
it's disabled because I currently cannot edit this because of the particular tier that I'm working with so we have our
4:04:07
form control then we're going to do our form description and the form description here I'm just going to copy
4:04:13
over all this says is that the different data parameters that you can use so here it's saying that country coupon and
4:04:18
discount are going to be replaced with their respective actual real world values so this is the left hand side of
4:04:23
our entire thing when we're on a larger screen size now I want to work on the right hand side of our entire section
4:04:29
which is going to be a div for all the rest of our inputs so let's give it a class name of grid which is going to be
4:04:34
grid Columns of one on small screen sizes and a grid Columns of two on larger screen sizes with a gap of six
4:04:41
between them we'll close that off and then inside here we're just going to put a bunch of different form Fields so I'll
4:04:46
show you exactly what I'm talking about this form field is for the background color we just need to make sure we import the input function and our form
4:04:53
message function and that should be all we need I believe I imported the wrong input so it looks like yes I did let's
4:05:00
make sure I import the correct one this time there we go that gets rid of all the errors and here all we're doing setting out the background color the
4:05:06
label is background color and the input is this so here you can see we can customize the background color if we had
4:05:11
permission now I'm just going to copy down the rest of these that are really straightforward so here's two more that
4:05:17
are super straightforward text color and font size again super straightforward inputs that require no additional stuff
4:05:23
the next one is going to be slightly more complicated because it requires a new component that is this switch component right here so what I'm going
4:05:30
to do is go to Shad CN npx Shad CN at latest and we want to add the switch
4:05:37
component just like that that should install the brand new Switch component for us which we can use there we go so
4:05:43
let's import that component and all I need to do is make sure the checked is set to my field value and on check change is set to the field.on change
4:05:50
then I finally gave it a display a block so it shows up below my label so if we go to customize here and I make sure
4:05:56
that this is saved I need to refresh my page to get it to work there we go you can see now I have this sticky icon that
4:06:02
I could actually toggle one way or the other now the last couple things that I need are again going to be super
4:06:07
straightforward inputs that we've done before so we have a B Banner container the only difference about this one is I
4:06:12
have description telling people what this actually Associates with this is just the HTML container where the thing is stored by default it's the body and
4:06:19
then finally we have our class prefects which again I have a small description telling people what this actually does now lastly at the very bottom of my form
4:06:26
just like before I'm going to be adding a button that lets me save this but only if I can customize the banner will I
4:06:31
show this button so right now I'm not showing the button now to test what this would look like if I could do
4:06:36
customization what I'm going to do is go back to my edit page here and instead of passing in this I'm just going to pass
4:06:42
in true so I'm going to say or true so that means no matter what I can always customize my banner and now you can see
4:06:48
I have the ability to fully customize every single thing inside of this which is great now the only thing that we really have left to do besides actually
4:06:54
make the saving of the form work is to work on implementing what the banner is going to look like up here because I actually want to import this as a
4:07:01
component called Banner that's going to show all the information that we want to show so I'm going to create this component in my component folder banner.
4:07:09
TSX export function Banner just like that now this Banner takes in a lot of props I'm going to paste in what the
4:07:16
props are going to be essentially we have a message that's the message I want to show in our case this is the message
4:07:21
right here I then have a prop for if I can remove The Branding or not because based on what tier I sign up for I may
4:07:27
or may not have a branding message showing up that says hey check out easy PPP this company that created this
4:07:32
actual Banner that you see then I have mappings that allows me to associate these Dynamic values with the real
4:07:37
values so what should coupon be what should discount be and what should country be and then finally I have this
4:07:42
customization and Country obviously should be required then I have this customization section which is just all the different customization fields on
4:07:49
what everything should look like now the first thing that I want to do is I want to get the prefix that I'm going to use for my CSS so my prefix is just going to
4:07:56
be my customizations do class prefix or it's
4:08:01
going to be equal to an empty string then I want to get my message but I want to make sure it's mapped to the correct
4:08:07
values so I can take my entire object. entries of my mappings so I'm
4:08:13
essentially converting this object into an array and then I can reduce this array into a real message so let's make
4:08:19
this a little bit easier to see by minimizing our screen down so we look at just this particular section so in this
4:08:25
I'm going to have my mapped message and then I'm going to have a key and a value that come for my mapping so what I want
4:08:31
to do is I want to make sure I call this into a function and here I want to take my mapped message and all I want to do
4:08:38
is I want to replace anything that has the star key
4:08:44
or not star that anything that is wrapped in Brackets followed by whatever my key is so coupon wrapped in Brackets
4:08:49
discount wrapped in Brackets country wrapped in Brackets and so on I want to replace that with whatever the real value is so I want to call replace on
4:08:57
this and to make sure that this starts with my normal message I'm going to put my normal message in here and I'm going
4:09:02
to replace any apostrophe inside of here so any apostrophe like that I'm going to
4:09:07
replace all of those with the HTML version of them the reason for this is because I'm actually going to convert
4:09:13
this entire component to a string and if I have these weird strings already in my message I want to make sure those are
4:09:19
removed and showing with the HTML version instead it'll just make everything flow better also I might as
4:09:24
well while I'm here use this as a regular expression as well so I can use a regular expression with the G key
4:09:30
right here to make sure that it's going to be for all of that and since I want to use Dynamic values I actually need to call new RX just like this I believe and
4:09:38
pass it in the string version there we go and then I can close that off that
4:09:45
should give me a new regular expression actually it's Rex
4:09:51
XP there we go just like that and I believe I also have the ability to pass in any Flags I want which I want the
4:09:57
global flag this allows me to put Dynamic values into there so this will do all my replacing for me so I'm going to get a message that's going to replace
4:10:03
coupon discounted country with the actual real world values then I can return my actual jsx and this is going
4:10:10
to be a little different than a normal component cuz this is the exact component I'm going to send down and render on other people's websites so I
4:10:16
need to make sure all the styling and CSS is self-contained so to get started with here's the basic layout for what
4:10:22
this is going to look like you'll notice all my class names are prefixed with this prefix and I have easy PPP
4:10:27
container as the default value for the container same with here I have easy P message and the easy PPP branding all of
4:10:34
that is styled just like this I'll make sure I get my inment variables imported from the client I also something that a
4:10:40
lot of libraries don't do that provide overrides is I provide a override class that you can use that way your CSS
4:10:46
Styles will always be more specific than my CSS Styles just to make overriding things so much easier now the reason
4:10:53
that I mapped all these apostrophes to this actual Amper sand syntax is because I'm using this dangerously inner set
4:11:00
inner HTML to set the actual message as my HTML inside this span again that's to
4:11:06
make sure that it's going to be working properly with all these apostrophes and so on they're going to render out properly as actual HTML I wouldn't
4:11:12
normally have to do but since I'm sending this down to other people's websites that's why I need this section then I have here if you cannot remove
4:11:19
The Branding I have this section right here which is just a link directly back to my website and again I can't use an href or a link I'm sorry from nextjs
4:11:26
because again I'm rendering this on other people's websites this needs to be as barebones as possible now the next thing I need to render out is all of the
4:11:33
different styling code that I have and this is just how do I want to style this application so I'm going to copy this
4:11:38
over and explain it in depth to tell you what's going on but it's overall really basic CSS the very first thing I'm doing
4:11:44
for my container is I'm reverting all the Styles this is to make sure that every style that I have is going to be
4:11:49
default I don't have any weird stuff inheriting from their stylesheet then I'm just making sure things are in the flex column Direction so it's stacked
4:11:55
vertically I'm making sure my background color font size are all being set by the particular user's customization the font
4:12:01
family is inheriting add a little bit of padding if they set it as sticky the position is set to Sticky and it's set
4:12:07
to the top section and the text is in the center now for The Branding this is just a little bit different I have my
4:12:13
color inheriting font size inheriting and I'm making this an inline block just so it shows up on a new line and then
4:12:18
finally making it so it's underlined so I can easily see what the text looks like this essentially lets users know that this is an actual link and all of
4:12:24
this is in a style tag again because I need to be able to import this into someone else's website that's why this component looks so funky but now I can
4:12:31
go ahead and actually use this Banner right here so I'm just going to paste in what the banner will look like and you can see here that the banner is taking
4:12:37
in a few different things first of all I need to get all my form values so that's actually really easy to do I can say form values is equal to calling watch
4:12:45
just like that on my form and that's going to get all the values from my form then I'm going to set up a fake mapping
4:12:50
so I'm going to say the country's India coupons half off discounts 50 just some fake mapping so that we can see what
4:12:56
this would actually look like and then finally I have my customizations and whether or not they can remove The
4:13:01
Branding to show that branding section or not so I'm going to give that a quick save give my banner a quick save and now
4:13:06
if we scroll over here you can see exactly what the banner will look like on their website now even when I click
4:13:12
on it brings me directly to to this homepage when I click on that link so you can see this link is right there because they are required to show
4:13:17
branding now if I go ahead and I actually change whether or not they need to show branding or not so for example
4:13:22
in the section where it says can remove branding if I set that to True you'll see that if I give it a
4:13:28
quick refresh that branding has been removed so again this is all set up based on our permissions and again I'm
4:13:33
going to remove this permission for customization in a little bit but for now I'm going to allow myself to customize so we can actually see if
4:13:39
saving this information will work so now you can see the banner and when I change information it live updates which is
4:13:44
exactly what we want so now let's go ahead and make it so we can save this information and then work on permissions
4:13:49
so the very first thing that we need to do make this a lot bigger so we can work on it and wherever we are actually doing our product customization form in our
4:13:56
onsubmit we obviously need to call some update product
4:14:03
customization function there we go we're going need to pass it in our values. product ID
4:14:10
actually that's coming from customization product ID and then our values so we
4:14:15
know which product we're doing this on and where our specific values are and then again inside of our actions we need
4:14:21
to create this action I'm just going to paste it down because this is pretty much the same thing we've done over and over again it's very straightforward you
4:14:28
can see first we get the user then we make sure our data is correct and we check to see if they can do the customization based on those permissions
4:14:35
for now I'm going to comment this out because we want to be able to test to see if this works so I'll just say that this is going to be true all the time
4:14:41
we'll come back and fix this once we deal with per missions then I'm going to call this update product customization
4:14:46
DB and if it was successful render out a message so all the way at the very top here let's make sure we import this
4:14:53
function just like that and now we can go ahead and Implement that function so
4:14:59
export async function that's going to be updating our product customizations just
4:15:04
like that inside this function we're going to be passing it down the data as well as the product and user ID that
4:15:09
we're going to be updating this information for then the next thing we need to do is we need to get our product
4:15:15
if the product exists that means the user has permission to update it and in that particular scenario then we just want to call the really simple update
4:15:21
code get our product customization pass it in all the data where the ID is set to the ID we passed in so this first
4:15:27
line of code makes sure that the user that we're thinking about is the one that owns this product second line of code updates our actual database and
4:15:34
then finally we just need to revalidate our cache so here we're just saying redate our product cache for this
4:15:39
particular product and for this particular user so this code again relatively straightforward very similar
4:15:45
to what we've done all over our application and once we get all these different building blocks in place as you can see it becomes rather easy to
4:15:51
implement and write all these different functions and as you can see all this code is working as well the last step is
4:15:56
just to make sure it actually works inside of the form itself so let's go back to the form and we can import this
4:16:02
particular function just like that from the action version there we go that is the action version We implemented then
4:16:07
what I want to do inside of here is I want to get my data by awaiting that information and then I just want to
4:16:13
render out a message to the screen using toast again so const toast equals use
4:16:19
toast there we go make sure I spell that properly and now we can render a message onto the screen whether or not it was a
4:16:25
success or a failure so let's come over to here let's go ahead and we're going to change the font size to .5 RM very
4:16:32
very small click save you can see it says it updated we'll refresh our page go back to the customization and you can
4:16:37
see that that font size stayed really small so we know that this is working we'll just leave it at default though for for most part it really doesn't
4:16:44
matter so let's go back again to our customization and now work on making sure that our actual permissions are
More User Permissions
4:16:49
correct so right now wherever we have the value of or true we need to change that so here this should obviously not
4:16:56
be or true so now again all of this is disabled because we don't have permission and same thing here if we try
4:17:01
to save without permission it should give us an error so now we cannot customize this page at all and we also
4:17:07
should probably show the people that they do not have permission to access all this customization with a nice little custom message so inside of our
4:17:13
form underneath of our Banner if they cannot customize the banner well then we
4:17:18
should probably show them a message telling them that so we're going to put a div here with a class name put it some
4:17:24
margin on the top just to give it a little space and we'll create something called a no permission card and this is
4:17:30
a nice little card that we can put anywhere we want to tell people they don't have permission in a really nice and easy way so let's go into our
4:17:36
components we'll create a no permission card. TSX and this is a very
4:17:41
straightforward card as you can see here all it does is take in some children and by default the children say you did not
4:17:47
have permission to perform this action try upgrading your account to access this feature the title of the card says permission denied we're rendering out
4:17:53
the children as the description and then in the footer we have a link that goes to the subscription page so that they can upgrade their account and if we just
4:17:59
come in here and take a look at that that would look like if I make sure to import that card just like that and save
4:18:05
you can see we get permission denied you do not have permission to perform this action try upgrading your account to access this feature also you notice how
4:18:11
our Banner is sticking to the the top that is intentional because we have sticky set to true but we don't really want that inside of our form here so I'm
4:18:18
going just going to put this inside of a div and that means that it'll be stuck inside this div so now when I scroll you
4:18:24
can see it doesn't actually stick to the top of the page because that's not really what we want Even though technically it is what we want we don't want it on this particular form now when
4:18:31
I click upgrade account it'll bring me to the subscription page which we haven't worked on yet but right now we have pretty much everything related to
4:18:37
products done and it may seem like it's taking a long time to get here and that we have a ton left which I mean we do have quite a bit left but but this is by
4:18:43
far the bulkiest part of our entire project now while we're on the stage of permissions I want to focus on
4:18:48
permissions for creating new projects as well because depending on what tier you're on you have the ability to create only a limited number of products so I'm
4:18:55
going to go back to my product new page because I actually need to implement authentication here so I'm going to
4:19:01
create a simple helper function called has permission this is a nice little component we can use that allows us to
4:19:07
determine if a user has permission or not and if they do have permission we'll render the content inside otherwise we
4:19:12
render out some form of fallback or just don't render anything at all so here we can say permission and this permission
4:19:18
be can create product which is a permission we will need to create in just a second and this is going to
4:19:24
render a fallback because we want it to render the fallback and we'll determine what that fallback text is if we want to
4:19:30
be able to customize it so in our case I'll just copy over this fallback text and essentially it's just saying you
4:19:35
have created the maximum number of products try upgrading your account to create more so now we need to both implement this can create product
4:19:41
function and this has per per component the has permission component is going to be really easy so we can do that first
4:19:47
has permission. TSX this component right here all it does is like I said takes in
4:19:52
a permission a fallback whether or not we want to render it any fallback text and the children so the permission is a
4:19:58
function that takes a user ID or a null and if you remember all the permissions we've created so far that's the exact
4:20:03
parameters they take it also is optionally able to render a fallback if you don't want to render the fallback it
4:20:09
just returns null if you don't have permission and if you want to be able to change the back text that goes in that no permission card so that no permission
4:20:16
card we already created handles all of this for us so really all this function does is get the user ID check to see if the user has permission if they do
4:20:22
render the children if they don't render the fallback but if you don't want to render the fallback literally render nothing at all super straightforward
4:20:29
function for the most part we'll go ahead we'll import that and now we can work on can create product so we need to
4:20:34
go into our permissions right here and we need to create a brand new one async function can create product
4:20:42
user ID string or null and this is going to be pretty much the same thing we have
4:20:48
up here if the user ID is null return false then we want to get their subscription and this time it's going to be a little different because we have a
4:20:54
max number of products so we need to get how many products they have as well so we can just say
4:20:59
const product count equals await G product count just like that we can pass
4:21:06
it in a user ID then we just need to create this function which again is in our database folder so we can create a
4:21:12
function just going to pretty much copy this function that we have here this is just going to take in a user ID which is
4:21:20
a string it's going to call get product count it's going to be on the products but this is going to be a user tag
4:21:26
instead because we're going to have a user ID and then down here we pass in the user ID so there's our git product
4:21:34
count function now we need to make sure we just create the internal version of that so function git product count
4:21:40
internal it's going to take in a user ID which is a string and it's a very simple
4:21:46
function all we do is get the counts this is going to return to us an array we're going to await
4:21:53
calling DB Dot and we want to do a query so we're going to select actually and we
4:21:58
want to select specifically the product count and that's just calling the count function directly from drizzle so this
4:22:06
allows us to count up all the different products in our database we can get this from the product table so we're getting
4:22:12
all of the ones from our product table and we specifically want to get them where a certain criteria is true and
4:22:18
that criteria that we're waiting for is going to be an equal criteria and we want to check to see where our product
4:22:24
table. clerk user ID is equal to our user ID make sure this is an asynchronous function and that gives us
4:22:31
an array of different counts and we just want to return the first one from our array so counts of zero we want to get
4:22:37
the product count otherwise we're just going to return zero if we don't get something from the array cuz that means they have no products at all so that's
4:22:43
all it takes to create this particular permission that's relatively easy we can go back to our new page here we can
4:22:49
import this function just like that and we can finish implementing this function because now we need to make sure we get
4:22:54
this and we need to make sure that their product count is less than the amount that are allowed and that means that
4:23:00
they can still create new products so now whenever we try to create a new product if they already have the maximum
4:23:05
number of products it'll give us a nice warning so here new product you can see canate product is not defined we looks
4:23:11
like we need to save the file we forgot to click save so here give that a save now you can see I'm trying to create a
4:23:17
product but I already have the maximum number which is one so I get this nice permission denied message showing up on the screen I also need to make sure in
4:23:24
my action for creating a product that I also make sure I check to see if they can create a product before I go ahead
4:23:29
and do it so we'll scroll all the way up to the top where I have create product and at the very top here I'm just going to check can they create the product for
4:23:36
this particular user ID and if they cannot create the product then I'm just going to throw down an error to the user
4:23:42
so again a really easy way to check and make sure that they able to create it before we Implement anything in our database now the final thing for
4:23:49
products that we really need to do is to implement the products page we haven't implemented this page yet but luckily this page is dead simple page. TSX I'll
4:23:57
paste in the code for it that's just because we've already written this page essentially entirely this page all it's
4:24:02
doing is getting all of the different products for a user ID make sure I import that properly looks like it's still throwing an error I believe that's
4:24:08
because we need to make sure that this is optional we don't want to have to pass down a limit that should fix that error there we go so now all I'm doing
4:24:15
is I'm getting my user id redirecting if they're not null or if they are null sorry then I'm getting all my products if we don't have any show the no product
4:24:21
screen otherwise show my product Grid it's literally the exact same code as our dashboard if we go to our dashboard and our products you'll notice they're
4:24:27
almost identical minus the fact you can link to the product page from the dashboard so now we have everything done
4:24:32
with our products actually for real this time we can move on to dealing with our subscriptions because that'll lead
4:24:37
perfectly into dealing with all of our analytics so let's go ahead and create our subscription page we come over to
User Subscription Page
4:24:42
our Pages we'll just minimize all these so we can kind of get started from complete scratch since we're kind of on a whole new section of the application
4:24:48
now in the dashboard we'll create a folder called subscription and inside of here page. TSX export function
4:24:59
subscription page and make sure that this is a default function so there we go we at
4:25:05
least have something we can return on our subscription page so now we go to that page at least we have something to
4:25:10
render now on this page here what we need to do is first get all of our user information so user
4:25:16
ID that's equal to off and we need to get the redirect to sign in as well and of
4:25:24
course if our user ID is equal to null then we'll redirect them to the
4:25:31
sign in just like that now the next thing we need to do is to figure out what tier
4:25:36
the user is currently on so we've already created a function for this this is the really nice thing about using those DB functions cuz now I can just
4:25:42
get my user subscription tier boom passed my user ID and now it's just going to work make this an async
4:25:48
function you can see everything just works same thing here I want to get how many products I've created so I can say
4:25:54
get product count and that's a weit get product count boom we've already created
4:25:59
this it's that easy so now we have the number of products that we've created I also need to get the number of times I've viewed the pricing page because on
4:26:05
this subscription page I'm going to show you how many views you have left how many products you have left and so on so I'm going to say get pricing View count
4:26:13
is a weit get product view count we're going to pass in our user ID and also we
4:26:18
need to pass in where we want to count this from I'm going to be counting from the start of the month with whatever the
4:26:25
current date is now this start of month I need to make sure I get from date FNS so
4:26:31
npm I date FNS this is just a really handy library for dealing with dates
4:26:36
once that's installed really quickly we can go ahead and actually import this function we just need a manually import
4:26:42
for now import start of month from date FNS
4:26:49
there we go so now we just need to implement this git product view count which is a relatively simple function so we're going to go over to our server
4:26:56
inside of our database we need to now get one for product views. TS export
4:27:03
function get product view count and we also need to get the
4:27:09
internal version I'll paste down what the internal version looks like it's a relatively simple function and I'll
4:27:14
explain obviously in- depth exactly what each line of code is doing but it really doesn't make sense to have me type out
4:27:19
each line individually so let me just get all my imports in real quick get that import and then finally we need to
4:27:26
do this import and greater than input so all
4:27:31
this function is doing is taking in a user ID and a start date and what I'm doing is I'm querying on my product view
4:27:37
table I want to just count all my pricing view counts so just get a count of everything then what I want do is I
4:27:42
want to join this on my product table where my product ID is equal to the View's product ID so I only want to be
4:27:48
able to get the products that the user has actually done so here I'm checking the product table for the user ID and
4:27:54
I'm checking to make sure it's greater than the start dat so really what this code is doing is it's getting all the count of how many rows are in my view
4:28:00
table that are associated with the products for my user and or after whatever the given time that I pass into
4:28:06
this function is and then I just need to set up everything with my caching so here I can call all that caching related
4:28:12
code and just make sure I import everything that I need so I get my user tag here and of course all my props are
4:28:18
going to be the same props from up here get the cache tags just like that so this is going to be caching for a
4:28:23
particular user because again there's no individual ID it's just a user ID since I'm checking all my product views for
4:28:29
this particular user and now we can come back into here and we have our count function implemented it's very similar
4:28:34
to our product count we're just making sure we have an extra joint in there and that's about the only step now we pretty much have all the information we need to
4:28:41
implement this function so the first thing I want to do is render out a top section here that's just going to be the title for our page H1 it's going to have
4:28:48
a class name too to make this a little bit larger margin bottom of six text is
4:28:53
going to be 3XL font is semi bold and then in here we can just put the text
4:28:58
your subscription and now you can see we get that text showing up on our page the next thing we can focus on is going to
4:29:04
be for all of our different content at the very top of our page which is going to be all the content for how much we've
4:29:09
used in our subscription so we're going to have a div here and it's going to have a class name of
4:29:14
flex Flex column Gap 8 and margin bottom of eight and then inside of this div
4:29:20
we're going to have another div because this is going to be our column based layout essentially we're going to have two cards that represent how many views
4:29:27
we have and how many products we have and then another card for managing our subscription if we have one so here this
4:29:33
is going to be for containing our two separate side by-side cards so we're going to have a grid grid Columns of one
4:29:39
or on a larger screen size obviously the columns are going to be set to two and a gap of eight then inside of here we can
4:29:45
render out each one of our individual cards so let's import our card we're going to get our card header from here
4:29:51
our card title in our case I'm going to make the text a little bit larger just like that and this is our monthly usage
4:29:58
so this is just how many views we've essentially had in the month then we're going to have our card description and
4:30:04
inside of here we're going to use that format compact number function we created earlier to take how many views
4:30:09
we've actually already had and then we want to compare that to the exact same formatted of our compact numbers of our
4:30:15
maximum number of views so this is the maximum number of visits for our pricing page and this will say pricing page
4:30:23
visits this month give that a quick save you can see here's our monthly usage we have zero total pricing page visits this
4:30:29
month because we aren't tracking any of that information yet next we're going to do our card content and inside of here I
4:30:35
want to render out a progress bar which is something that we can easily get from Shaden so let's just import
4:30:42
the progress component from Shad CN it's a relatively simple and straightforward component shouldn't take too long to
4:30:48
install and now we can import that progress component and inside of here we can give it a value and our value is
4:30:54
just going to be our pricing view count divided by our tier. maximum number of
4:31:00
visits we need multiply that by 100 to convert it to a number between 1 and 100 now if we give that a save you can see
4:31:06
we have that bar showing up right there now the formatting looks a little bit off so my guess is I imported my card content from the the wrong location
4:31:12
looks like that's the right location but my progress that's also the right location so it does actually look like everything's being imported from the
4:31:18
right location let me just make sure uh my card content should be outside my header that should fix my styling and
4:31:23
there we go we now have our progress bar showing up now we're going to make what's arguably an identical card for our number of products so same text
4:31:29
large we're going to have the exact same product count and number of products and the same thing for our progress bar and if we say that you can see we get that
4:31:36
showing up now I'm going to slightly modify our progress bar instead of using a background primary I'm going to come
4:31:41
in here with a background of accent instead so let's just make sure I spell accent properly give that a quick save
4:31:47
and now you can see we have a blue background instead of the black background which looks better for our particular styling and on a larger
4:31:53
screen size you can see that these two elements will show up side by side but actually it doesn't look like that's quite working so there's clearly
4:31:59
something going on inside of my grid here you can see grid columns one on medium it should be grid calls 2 and now
4:32:06
when we expand our screen size you can see they are side by side so that is working as we expect now after this we
4:32:11
need to have another card for managing our subscription and this is only going to be a card that exists if we already
4:32:16
have a subscription we're paying for because this is for managing our subscription inside of stripe so if we
4:32:22
have a free subscription so far there's nothing in stripe if that makes sense so if our tier is not equal to subscription
4:32:29
tiers whoops subscription tiers. free then we don't want to render this or we
4:32:34
do want to render this I'm sorry so if our subscription is not free then we're going to render out a brand new card let
4:32:40
me make sure I get rid of the Subscribe for from here that shouldn't be there there we go card header inside of there
4:32:45
we know our card title and I'm just going to copy down what the content in the title and description is cu it's
4:32:51
just plain text you're currently on the whatever the tier is if you'd like to upgrade cancel or change your payment method use the button below and then we
4:32:58
need to actually put a button so we'll say card content just like that inside of here we're going to have a very basic
4:33:04
form with an action and the action is going to be for creating a customer portal session this is going to be
4:33:09
dealing specifically with stripe and this is just going to create a link and redirect the user to that link so what
4:33:15
we're going to do is just put a simple button inside of here our variant is going to be
4:33:20
accent we're going to have a class name on here so we're going to say text
4:33:26
large rounded large and then our size is also
4:33:31
going to be large this is just going to be an overall relatively large button that says manage
4:33:38
subscription and then let's go ahead close off that button just like that and of course we don't have this action yet
4:33:44
so let's just remove that so we can see what our code looks like and you can see right now we are on the free subscription if we just make this say
4:33:50
equal free subscription you can see you're currently on the free plan if you like to upgrade blah blah blah do this and again make sure our card content is
4:33:56
outside of our header to make sure our styling looks right there we go so now we can add in that action that we
4:34:02
removed so action equals and this is going to be create customer portal
4:34:08
session we'll go ahead and Implement that in just a second but obviously we're going to get an error because it doesn't exist quite yet
4:34:15
so I'm just going to move on and we'll come back and create this function in a second because we're going to create some other functions with stripe that are going to do similar things so the
4:34:21
next thing I want to work on is dealing with all of my different pricing cards because I'm going to render out each individual pricing card this codee's
4:34:27
almost identical to what we had before for rendering our pricing cards and I want to render each individual pricing card out and I want to show them with a
4:34:33
button that says like upgrade downgrade swap whatever it is so let's go ahead and get all of our pricing code
4:34:39
functioned now I'm going to copy this over this is about 90% identical to the pricing card that we've already created
4:34:45
but I'll go over the major differences once I get all the different things imported that we need so get our tier names imported from here and we can make
4:34:52
sure that these functions will create in just a second and then finally we need to implement our card footer and react
4:34:58
node from here and of course get the check icon and this CN class right there
4:35:03
so this feature section identical nothing about this changes it's exactly the same as what we had before all the stuff in our footer identical all the
4:35:10
stuff in our header idental the one major difference between these two versions is in the card content we
4:35:15
have a giant form that instead of bringing us to the sign up button brings us to a button that is either going to allow us to cancel by deleting our
4:35:22
session or by creating a brand new session which allows us to check out and sign up for a subscription for the very
4:35:27
first time so what we can do is we can come in here I'm going to comment out these actions just because we don't have
4:35:33
one yet so I'm just going to put undefined into here and same thing up here for our action I'll put undefined
4:35:40
just so we can see what this looks like like now if we save you can see down here I have my four pricing cards you'll notice they look identical the only
4:35:46
difference being is that these buttons for the current one says current and is gray out and the other ones have the ability to swap and they'll submit a
4:35:53
form for us when we click on them right now the forms do nothing so let's bring in those functions and go ahead and
4:35:58
actually work on creating those different functions for stripe implementations also what we need to make sure we do is scroll all the way to
4:36:04
the very top set this to not equal to free and now we can go into our server folder we can create a brand new file
Stripe Integration
4:36:10
called stripe for managing all our different stripe related things so we have an async function called create
4:36:16
checkout session function just like that and we don't even need to pass anything to this
4:36:23
except for the tier that we're going to be creating this for so we're going to create a tier and this is only for our paid tier names so I'm going to say paid
4:36:29
tier names and I'm going to actually create that type inside of our data so go into our data subscription tiers
4:36:35
we're going to export a type which is paid tier names which is just equal to
4:36:41
tier tier names but we want to exclude the free tier there we go so now paid tier names
4:36:48
is basic standard or premium that's exactly what we want make sure we import this and there we go we're importing one
4:36:53
of the tiers that we want now the next thing we need to do is to get our user and we actually need the full user
4:36:58
information because we need to be able to get certain things like the stripe custom ID and so on so this is going to be called
4:37:05
await current user and that is actually coming from Clerk and allows us to get our current user and if our
4:37:12
user is equal to null then we can just return that there was an error so we'll say error true next thing is we can get
4:37:19
our subscription so subscription is equal to get user
4:37:25
subscription and we'll pass in our users ID again since we already created all these functions it's super easier for us
4:37:30
to just Implement them and use them without having to worry about anything else so we'll await that function now
4:37:36
down below we can say if our subscription is equal to null again we
4:37:41
have an error so return error true otherwise we can finally move
4:37:48
on to this next section so this is where we're going to Branch a little bit so if we don't have a subscription yet then we
4:37:54
want to be able to create a brand new subscription so if our subscription oops
4:37:59
subscription. stripe customer ID if this is equal to null well then we want to create a brand new checkout session
4:38:06
otherwise we're going to piggyback on some of the features built into stripe so this is going to give us a URL and
4:38:12
we're going to call get checkout session we're going to pass it in the tier the
4:38:18
subscription and the user that we're creating this for so let's create that function function G checkout session and
4:38:25
we're going to pass it in all of that information and I'm just going to copy over the typing for that information
4:38:30
because the paid tier is going to be one of our tiers here we're going to have our subscription and the only thing we care about is a stripe customer ID and
4:38:36
the stripe subscription ID and then our user just gets the user type from clerk now to to use this function we need to
4:38:42
First figure out what customer details we need for our user so our customer details is equal to and this depends on
4:38:48
if our subscription has information for our particular user and actually we don't even need to do this because we already know our stripe customer ID is
4:38:54
null so we don't even need to pass in our subscription information we only really need the user and for our
4:39:00
customer details this is going to be rather straightforward we want to take our customer and we want to set the email specifically and that's just user.
4:39:07
primary email address and we want to get the email address property from that so this is just going to get whatever the user's email address is and that's going
4:39:14
to be our customer details so what we can do next is we can say that we're going to have a session and that's going
4:39:19
to be called await calling the stripe function and this means that we now need to import stripe into our application so
4:39:25
we can say npmi stripe just like that that's going to import stripe and then all the way up
4:39:31
here we can say import Stripe from stripe we also need to make sure that we
4:39:37
move this stripe folder or file into our actions folder cuz technically these are going to be actions that we can call so
4:39:43
let's make sure we call use server at the top here because these are actions there we go we now have access to stripe
4:39:50
and we can just say const our small stripe is going to be equal to creating a brand new stripe instance using our
4:39:55
server environment variables which we need to import server environment from and
4:40:03
that's going to be at slash data SL environment server there we go and we
4:40:09
want to get essentially our stripe secret key there we go and let me make
4:40:15
sure I spell all of this properly and now we're getting an error because we don't have stripe secret key to find on here so stripe secret key z. string and
4:40:25
let's actually put that into our actual environment variables so to do that we need to go ahead and log into stripe and
4:40:31
once you're inside of stripe we essentially need to find the section for our API Keys a lot of times you can go to settings and click on developers and
4:40:37
we can see here API Keys now inside of this section just zoom it in a little bit so it's easier to see we have the
4:40:43
publishable key and the secret key we're just going to be getting the secret key cuz we're not even doing anything on the client everything we're doing is on the
4:40:48
server so let's just copy that we're going to minimize all this down go to our EnV file section we're going to
4:40:54
create a new section for stripe we have our stripe secret key and
4:41:01
we're going to set it equal to that secret key that we just added in I'm also going to make sure I copy this over
4:41:06
into the EnV example section and add a section here for stripe as well so let's save all that information save this and
4:41:13
now hopefully with all that done we come back over here and refresh obviously we're still getting errors but at least this section is fixed and now we can
4:41:19
actually access the stripe API to do things so here we want to create a basic checkout session so we're going to say we want to create a checkout session
4:41:26
just like that and we want to pass along all the information we need so I'm just going to take this customer email paste it into here get rid of this customer
4:41:32
details up there the next thing we need to do is pass along all the data for our subscription so our subscription data we
4:41:38
specifically just want to have some metadata clerk user ID is user. ID this way we can link
4:41:44
together our subscription with our clerk user the next thing we need to do is to specify any line items that we have this
4:41:50
is the thing that someone is going to be buying this is going to have a price section and it's going to have a
4:41:56
quantity which in our case is always going to be one because we're just buying one single subscription now for
4:42:01
the price this is actually something that we're going to be getting and setting inside of stripe so inside of stripe I'll make this quite a bit larger
4:42:07
so you can see we have this product catalog section where we can create different products so for example if this basic product right here all I did
4:42:14
was create a product I'll show you what it looks like you can just click add product all you need to do is type in the name of your product optionally give
4:42:20
it a description if you want determine the amount that your product is going to be and whether or not it's going to be recurring in our case we want it to be
4:42:26
recurring and be monthly and there we go that's how you create a product you click add and that'll create the brand new product for us we have a premium
4:42:32
standard and basic product already created and what we can do is we can go inside of here and we just need to be
4:42:37
able to get the product IDs so here we have our product IDs we actually need the pricing ID so we can click on our price and up here we get the pricing ID
4:42:44
and that is what we're essentially going to put into here we're going to put each one of these pricing IDs now I want to
4:42:50
make sure that these are private variables so inside of our EnV we're going to have our stripe basic
4:42:56
plan price ID and set it equal to that and we're going to get this for each of them so instead of making you watch me
4:43:02
type these out I'm just going to copy each of those plans in and then I'm going to go over to our example and
4:43:07
again same thing going to paste those down and I'm going to delete them because we don't want them to be stored in there so now we have all of our
4:43:12
different plan IDs I can now add these into our environment variables so we're going to have our different
4:43:18
plans again let make sure I get this hooked up right z. string comma
4:43:26
afterwards z.
4:43:33
string and there we go now we have those inside of our EnV variables now we can actually use them which is really great
4:43:38
because if we go back to our data folder that's where we set up all of our subscription tiers and I can add in the
4:43:44
stripe price ID just like this so stripe price ID is going to be EnV I want to
4:43:50
get my server ones and I want to get the basic plan so I'm going to take this and I'm going to move it down to here now
4:43:56
this one doesn't have a stripe plan ID so we'll say stripe price ID is going to
4:44:01
be undefined or null it just doesn't have one so we're going to specify it as null then we'll move this down to both
4:44:08
of these this one is going to be the premium version
4:44:15
and then this one right here is standard so now we at least have all of our IDs associated with each one
4:44:21
of our different projects or our products I'm sorry our tiers actually and now we can just say tier Dot and we
4:44:27
can get the actual pricing plan for it so this is based on our tier plan names so that means I need to take my
4:44:32
subscription whoops subscription tiers I need to get the one for the specific tier and I want to get that stripe price
4:44:39
ID just like that so this is is going to be an ID of a stripe price and that means it's going to be perfectly linked
4:44:44
with our stripe database so we specified what the customer email is we specified how to link this to our customer we specified what they're purchasing now we
4:44:51
need to specify that this is going to be a subscription so stripe knows this is a monthly payment and then we need to have a success URL which is where we redirect
4:44:58
the user to and this is coming from our client EnV so all the way up here I'm
4:45:03
going to copy this down I'm going to get our client environment variables from the client version of this file so our
4:45:10
Cent EnV comes with a next public server URL and we just want to redirect them back
4:45:16
to the page they were just on so the subscription page and we want to do the exact same thing for a cancel so the
4:45:23
cancel URL bringing them back to the exact same place then all we want to do is down here return our session. URL
4:45:29
back to the user so up here we now have that URL which could be null so if the URL is equal to null then we just return
4:45:37
an error otherwise we're going to redirect the user to that URL and this is going
4:45:44
to redirect them to stripe where they can enter their payment information and so on now this is something we're going to worry about implementing it in just a
4:45:50
little bit so we're going to come back here now to make sure that everything is going to be working we also need to implement the other two functions so we
4:45:56
have an export async function and this one is going to be a create
4:46:03
cancel session just like that for now I'm just going to make it do absolutely nothing and then an async function
4:46:10
called create customer portal session again I'm
4:46:15
going to make it do nothing these are just the functions that we created on this page so now we can import all of
4:46:20
these different functions even the ones that don't do anything yet so we can at least see if this is working it looks
4:46:26
like we've gotten rid of all of our errors we come back over here everything is rendering and hopefully if I click on
4:46:31
one of these buttons it's going to bring me to the page where I can actually purchase this product so I can click swap for example and now you can see
4:46:37
it's brought me to this particular page where I can enter in my credit card information and purchase this particular product and
4:46:43
if I were to go back for example you can see it brings me back exactly to this page now before we go ahead and actually test this implementation we first need
4:46:49
to deal with web hooks inside a stripe so I'm just going to search here for web hook you can see here we have the web
4:46:55
hooks right there and this allows me to actually deal with creating web hooks so let's actually Zoom this out a little
4:47:00
bit more so it's easier to see I will again go to the settings actually the developer button is right there you can
4:47:06
see we can click on web Hooks and I get a bunch of information inside of here we'll Zoom it in a little more so it's easier to see you can see we have create
4:47:12
local listener and create an endpoint I'm just going to do local because that's how we're going to be testing first I need to install the stripe SDK
4:47:18
and log in and then I can call stripe listen and forward it to whatever my particular URL is and finally I can
4:47:23
trigger that particular endpoint and then from this exact page I can see what all the things are being sent along I
4:47:28
can go to this events Tab and see all the events that are being sent along with everything for example I had a billion portal session created because
4:47:35
of the things that I've done so far so I'm going to go ahead and I'm going to come into my web Hooks and start implementing this web Hook from stripe
4:47:41
It's relatively simple to actually do this implementation so to get started with implementing this we first need to create the actual location in our API
4:47:48
we'll create a folder called stripe and inside of here we'll create our own routts file and inside this route. TS
4:47:55
file we just need to get started with stripe now dealing with web Hooks and stripe is relatively easy we're going to export an async function called post
4:48:03
that's going to take in our request whoops request and this is a
4:48:08
next request and then inside of here I want to get my event which is as simple as calling a wait on the stripe and of
4:48:16
course we need to get stripe so we can say con stripe equals new stripe make sure we import that and it's going to be
4:48:23
getting my environment variable for my stripe secret key there we go so we're going to give be getting a stripe and I
4:48:29
want to deal with web Hooks and I want to be to construct an event so here we go inside of here I want to get the body
4:48:35
for my text so request. text is going to get all the text from whatever sent to me by stripe
4:48:41
I then need to get the headers from stripe so get the particular header which is my stripe signature just like
4:48:47
that and I'll say that this is a string because it should come back as a string and then I need to get my stripe web
4:48:54
hook secret now to be able to get this stripe web hook secret we need to First Implement that into our environment
4:48:59
variables so here we're going to say stripe web hook secret is a string in
4:49:04
our environment variables in our stripe section we need to add in our stripe web hook secret and we need to do do the
4:49:11
exact same thing on our example version as well now to be able to get that we just need to create a local listener so
4:49:16
I'm just going to copy this particular code to get the local listener go into my package Json and create a simple
4:49:22
script for setting this up so here we'll just say stripe and I'll just call this web hooks just like that and this is
4:49:29
going to call stripe listen and I want to forward to Local Host 3000 API web
4:49:36
hooks SL stripe and that that's going to do is forward every single stripe API
4:49:41
web hook to this particular URL when I call that so what I can do is I can say npm run stripe web
4:49:48
Hooks and if I give that a quick second to run you can see that it is going to give me a brand new secret key that I
4:49:55
can use and it's going to say hey you know what everything is up and running so now we can go ahead into our route or
4:50:01
not into our route into our environment variable paste that key in and now we have a secret key that we can use for our web hooks as well so now if we go
4:50:07
back to that web hook that we were implementing right here we can set okay now we have an event and we can switch
4:50:12
on the particular event. type there we go so event. type in the particular case
4:50:18
that we have a customer. subscription deleted I want to do something I then
4:50:23
want to do the exact same thing in the case that I have a customer. subscription and I want to do when I
4:50:30
have an update or not an update yeah an update that'll work make sure I put the colon at the end of these there we go
4:50:37
and I'm going to copy this one more time for what happens when we have a created ad as well so I think it's just create
4:50:43
nope created just like that and then finally at the very bottom I want to return a new response which is null and
4:50:49
has a status of 200 just so stripe knows that this successfully worked so let's get started with the created all I can
4:50:55
do is say await handle create pass in my event. dat. object and then I can put a
4:51:02
break statement and I can create a function called handle create which takes in my
4:51:09
subscription which is a stripe. subscription just like that so it's giving me all of my subscription data
4:51:15
from stripe now I can copy this and paste this down a couple times but this one's going to be for handle delete and
4:51:21
this one's going to be for handle update there we go and I can create essentially the exact same function for
4:51:27
handle delete and handle update and they're all going to do different things but they're
4:51:32
going to be relatively similar between all of them so inside of handle create the very first thing I want to do is get
4:51:38
my tier for the user so I say tier is equal to get tier by Price ID and I can
4:51:45
pass in my subscription. items. dat this is that list of line items that we created so if we look at this create
4:51:51
checkout session I'm sorry not this one it's this one right here these line items that's this list that's giving it
4:51:56
back to us so we're going to get the very first item from there and I want to get the price. ID so
4:52:02
now I can use this function that I'm about to create to get a tier based on that price ID so back into here I'll
4:52:09
create a function make sure I export this this is going to take in a price ID
4:52:16
which is a string and it's actually a stripe price ID there we go make sure I
4:52:22
actually spell all this properly and then I can just return subscription tiers and actually it'll be
4:52:28
easier if I just paste this in there I just want to get the values from that and get it based on my stripe price ID
4:52:34
so essentially I'm just looping through each of my subscription tiers and returning whichever one has the right price ID that's going to return to me
4:52:40
single one of my tiers now what I can do is I can go back to here and this will get me a particular tier which will give
4:52:46
me all the information I need to be able to create this in my user the next thing I need to do is figure out which user this is associated with so my clerk user
4:52:53
ID is going to be equal to subscription. metadata that's why I set that metadata and I want to get the clerk user ID now
4:53:01
obviously if my clerk user ID is equal to null or my tier is equal to null then
4:53:06
something bad happened and I need to throw an error so that way I know for in fact there's a problem so I'm going to
4:53:12
return a new response with null and status of 500 so now we have an error
4:53:17
please somebody solve that the next thing I want to do is get my customer information from stripe so I can say
4:53:22
that's equal to subscription. customer make sure I spell that properly there we go that's
4:53:28
going to give me all of my customer information namely this is a customer ID that it's going to get for me or it
4:53:33
could be a customer object so I want to get the customer ID from that so I'll say customer ID is equal to to and I
4:53:40
want to check the type of my customer if it's equal to a
4:53:46
string there we go then I know that I can just return whatever this is because it's an ID but if it's not equal to a
4:53:52
string well then I want to get the ID property from my customer by saying customer. ID so this may or may not be a
4:53:58
string and depending on what we do we want to make sure we get the right value then finally I can actually update my
4:54:04
user subscription so I'll call a function called update user subscription that's going to be
4:54:10
accessing my database I essentially just want to pass along a bunch of information into here so I'm going to go and create this function now so we'll
4:54:16
come all the way down into our section for our database which is inside of our server and our database we got our
4:54:23
subscription section and here export function update subscription just like
4:54:29
that and it's actually called update user subscription now inside of here I need to obviously get all my data and so
4:54:35
on but let's go ahead and write out our database query so let's make sure this is asynchronous and we want to do a db.
4:54:42
update and we want to update the user subscription table and we want to set our data so we can get that data in
4:54:49
safely from here which is just a partial for my type of user subscription table.
4:54:55
infer insert that's pretty much the same as all of our other update functions then I want to do it where specific
4:55:01
things are true and unfortunately I can't just do a generic where wear based on like user ID or stripe customer ID
4:55:07
because depending on if we're doing a create an update or delete we're going to get slightly different information
4:55:12
back so I'm actually going to take my wear in directly from my update function so up here I'm going to pass in a wear
4:55:19
which is just going to be SQL and this SQL is just a type that comes directly from drizzle so it's saying just any
4:55:26
amount of SQL that I'm going to write is coming in as my wear Clause then what I want to do is I want to make sure I
4:55:31
return specifically the ID which is the user subscription table. ID and I want
4:55:37
to get the user ID which is my user subscription table table clerk user ID
4:55:42
that way I can use that to revalidate my cache so I can say updated
4:55:49
subscription is equal to waiting for that and then if my updated subscription
4:55:55
is not equal to null make sure I spell that properly
4:56:00
there we go then I can revalidate my DB cache where the tag is the cach
4:56:06
whoops cach tag. subscription I want to get it for user ID which is my
4:56:14
updated subscription again didn't spell that properly and then finally my ID is my
4:56:20
updated subscription. ID so just revalidating my cash for all that information so I just now need to pass
4:56:26
along aware as well as all my data directly from this route right here so let's make sure we import that just fine
4:56:32
here for my wear Clause it's just going to say I want to check equal user subscription table dot in our case
4:56:40
I have have a clerk user ID so I'm going to check for my clerk user ID and then we can pass along all the different data
4:56:45
so if we look here the data we need is our clerk user ID well that's pretty easy but we don't really need to add
4:56:50
that in there if we're doing an update so we can do just next step of thing which is our stripe customer ID which is
4:56:57
our customer ID we also need to get the tier that they're upgrading to which is just tier. name we need to get the
4:57:03
stripe subscription ID which is our subscription. ID and then we need to get the stripe subscription item id which
4:57:10
again is coming from our subscription. items we want to get the first element from our data array because we're only
4:57:15
ever passing one and we get the ID for that so now if we make it this an asynchronous function and then we come
4:57:22
into here we can just return a waiting for this and now there we go we automatically have the ability to handle
4:57:27
the creation of different user subscriptions so whenever someone signs up we update their subscription to that next tier level so hopefully this all
4:57:35
should be working I'm already listening for my web hooks so let's go ahead and just test that and see if everything works properly so I'm going to come in
4:57:41
here I'm going to upgrade to the basic plan I'll make this a little bit larger Zoom this in and I can come in here just
4:57:47
enter a bunch of credit card information enter a name enter a random zip code none of this information
4:57:53
actually matters and we'll click subscribe and hopefully everything will work successfully it'll redirect us to the last page we were on and we should
4:58:00
see it actually updates their subscription and look at that we're now on the basic plan you can see we have one of five products we have a monthly
4:58:06
usage of 10,000 now so now we have the ability to actually spap between different plans and we have this manage
4:58:11
subscription button right now it doesn't work but you can see it showing up so we at least have handle create completely
4:58:16
finished now while we're here I might as well do the update function as well so for the update function it's going to
4:58:22
have some similarities to this function for example we need to be able to get the tier so just paste that in there we're going to get the tier based on
4:58:27
that ID I want to be able to get my customer information as well so we'll copy that down but we don't have the
4:58:33
clerk user ID cuz we don't have any metadata that we can pull from this subscription so instead what I'm going to do I'm going to first just check if
4:58:39
my here is equal to null then I'm going to return a new response that's going to
4:58:45
be a status of 500 again just throwing down an error to the user and then we just want to call this update function
4:58:51
again so let's just do that we're going to call update but this time we don't have a clerk user ID but I do have a
4:58:57
stripe user ID so I can say stripe customer ID is customer ID and in that
4:59:03
case if we're updating our subscription the subscription ID should stay the same the item id should stay the same the customer ID should stay the same the
4:59:09
only only thing changing is the tier for what we're updating so that's the only thing I'm going to pass along to this
4:59:15
particular function now finally we need to handle delete and again I want to get my customer information so I can get my
4:59:20
customer information from here and I can just essentially call the exact same function but this time I'm going to be
4:59:25
updating the tier specifically to the free tier so I can say subscription
4:59:31
whoops a subscription tiers there we go free. name and I also want to make sure
4:59:37
that I take the stripe subscription ID and remove that so let's say stripe subscription ID is equal to null and our
4:59:45
stripe subscription Item ID is equal to null because we've removed this subscription from the user there we go
4:59:51
now we can keep the stripe customer ID because they're still associated with that particular user but we can get rid
4:59:57
of all the other stuff and downgrade them back down to the free tier so we at least have handled all the different scenarios that stripe can throw at us
5:00:03
with the different web hooks that we're dealing with so now let's go back to stripe and implement the rest of our different functions here so we have this
5:00:10
create customer portal session as well this one's actually relatively easy we first need to get our user ID which
5:00:16
equals await actually I'm sorry we don't need to wait we just need to get our off just like that then the next thing is
5:00:23
obviously if our user ID equals null to return an error just like that and then we need to
5:00:30
get our subscription which is just get user subscription again something we've already created in the past and then if
5:00:37
our subscription whoops sub cription do stripe customer ID obviously
5:00:44
I need to await this there we go if the stripe custom ID
5:00:50
equals null then we have another error so we can return error true and that's because to view this portal you need to
5:00:56
view it as a customer so now let's get our portal session which is just equal to await make sure I spell that properly
5:01:03
and we want to get stripe. billing this time and we want to get the billing portal specifically and
5:01:10
we want to create a session for that so we can create it for our
5:01:15
subscription. customer ID and we can get a return URL which is just going to be
5:01:21
the exact same as our success URL down here so I'm just going to find where I pasted that and we're going to copy that
5:01:26
exact code so up here for our return URL we're just going to paste that in and then finally we're going to return or
5:01:32
I'm sorry redirect to our portal session. URL just
5:01:37
like that so now if they click the manage session button or manage subscription button it'll bring them to
5:01:42
their portal so let's refresh and see if that works manage subscription and you can see it's redirected me right here to
5:01:48
this ability to actually manage everything related to my subscription now you may notice that yours doesn't quite work right away so come over here
5:01:55
and search for customer portal or actually it may be billion
5:02:00
portal there we go billion customer portal you need to search for this particular page right here and you just
5:02:05
need to go through and you need to set up all the information for how your page works and you need to make sure that it's activated once that's done you
5:02:12
should be able to actually see and use this inside your application and this allows them to update their plan and so
5:02:17
on so for example I can update my plan to the standard plan click continue it's going to ask me to confirm I click
5:02:23
confirm now after a quick second after the payment goes through we should see when we go back to this particular page
5:02:29
the user is now on the standard plan and that's because the web Hook from Strike sent over to my application and said hey
5:02:34
they went ahead and they updated their plan and it went over and updated me to this particular standard plan now now if
5:02:40
I were to swap back to this plan that button currently doesn't work so we need to make sure we Implement that next this
5:02:45
is luckily not too terribly difficult to do where we have our create checkout session you can see we have this else section we still need to implement for
5:02:51
what happens when they already have a subscription and we want to update it in that case we want to call the git
5:02:57
subscription upgrade session function which we're going to create we're going to pass in our tier and we're going to
5:03:03
pass in our subscription and we'll say const URL is equal to that and then we
5:03:08
will just redirect to the URL down here and there we go that's all we need to do inside of this function so let's go
5:03:13
ahead and create an async function called get subscription update session
5:03:19
or upgrade session it's going to take in a tier which is a paid tier name and
5:03:24
then it's going to take in our subscription and the subscription is going to have our stripe customer ID
5:03:30
which is a string or null and it's also going to contain our subscription and item id which we all need all of this
5:03:35
information to make all of this work so the very first thing I can do is just check if any of these do not exist then
5:03:41
I want to just essentially throw a new error by returning a new response and
5:03:46
this response is going to be null status 500 then we can just go ahead and create a brand new session just like we did all
5:03:54
the way up here we essentially want to create the same thing that we did here so I'm going to paste this down we want a billion portal session we want to
5:04:00
create it for this particular customer we want the exact same return URL but this time we want to specify where we
5:04:06
want them to go by giving them a type of data so this one is going to be an update confirmation then what we can do
5:04:12
is we can say for that update confirm what we want to do is pass along what the subscription is that is just our
5:04:19
subscription. ID so we want to get the subscription ID then what we need to do is pass along all the different items
5:04:24
that we're going to be updating so the ID is our subscription and we want to get the item id we want to get the price
5:04:31
that we are upgrading them to which is coming from our subscription tiers for our particular
5:04:36
tier and we want to get the stripe price ID and then finally the quantity which in our case is always going to be one so
5:04:43
all this complicated bit of code does let me just make sure at the bottom we return our portal. URL all this
5:04:50
complicated bit of code does is essentially say hey bring them to that exact same billion portal but make sure
5:04:55
you bring them exactly to the page that updates their subscription to the brand new subscription that they selected
5:05:01
that's all that you need to do in this section so now we can see here that we need to make sure we await this function
5:05:06
and everything should work if we give that a quick save it's still saying this could be a string or a response I should
5:05:12
probably just make sure here I just throw a new error instead there we go
5:05:17
that just cleans that up makes it a little bit easier so now if I come in here and I want to swap to for example the basic plan if I click on Swap you
5:05:23
can see it's loading it's loading it's loading and now I have the ability to confirm my update to downgrade to the basic plan the last thing I need to
5:05:30
handle is what happens when I want to do a delete so let's just come all the way up here for the delete just like in all
5:05:36
the other ones I need to get the particular subscription that I'm dealing with and in this particular case I need to figure out if I have a customer ID
5:05:43
and if I have a subscription ID otherwise I want to return a new
5:05:49
response there we go and this is going to be null with a status of 500 just to
5:05:55
say hey there was some type of error these things are required to be able to do this cancellation because if you don't have a subscription you can't
5:06:01
cancel it now to get our session it's going to be very similar to what we did down here I'm actually going to copy
5:06:06
this entire thing bring it all the way up here but instead of returning I'm going to redirect to the portal session.
5:06:13
URL and this time I just want to change our type so our type here is going to be
5:06:18
for the subscription cancel and this is going to be subscription cancel and we just need to put different information
5:06:24
inside here it's actually very simple we just need to specify what subscription we're canceling which is our subscription. stripe subscription ID
5:06:31
there we go make sure I put the final parentheses there and this allows me to create a URL that goes directly towards
5:06:36
canceling so now hopefully if I click to swap to free that is essentially canceling my subscription and we should
5:06:42
see it redirects me to the page that says are you sure you want to cancel your plan boom there we go I and cancel right there if I want to obviously I'm
5:06:48
not going to do that because I want to still maintain my subscription now the final thing we need to do to make sure we handle everything related to our
5:06:54
script subscriptions is if we search for to-do you'll notice we need to remove our stripe subscription on this
5:06:59
particular page when a user deletes their account this is actually super easy to do with stripe so we can come
5:07:05
all the way up here we can import stripe
5:07:11
from stripe there we go and then we can say that we want to get a small stripe
5:07:17
by creating a new stripe with our EnV that is coming from here EnV dot we
5:07:24
want to get our stripe secret key so now we have a new stripe instance we can work on and down here we can just say
5:07:30
stripe do subscriptions dot whoops Not subscription items we want to get subscriptions. cancel and we just pass
5:07:36
it in the ID of the thing that we want to cancel so that's actually relatively easy so before we delete our user we
5:07:42
want to do that all the way up here and we can say const user
5:07:49
subscription equals get user subscription and we want to get the user subscription for our user ID which is
5:07:57
our event. data. ID there we go give that a quick await and then with our
5:08:02
user subscription we can pass in the stripe subscription ID but we only want
5:08:07
to do this if our stripe subscription ID is not equal to null there we go so now if we have a
5:08:15
user subscription and the ID is not equal to null then we're going to go ahead and we're going to cancel that subscription for them we can just throw
5:08:21
a quick await on that and that's all we need to do to get that to work there we go we can remove that to do and luckily
5:08:27
that was super straightforward and we've actually done everything we need to do with our entire subscription section we don't have anything left the only two
5:08:34
sections we have left is going to be our analytics and it's going to be the thing that allows us to render the app
5:08:39
application the banner on another person's website now that sounds like it's going to be really complicated but
5:08:44
it's actually not that bad and the amount of code for it is going to be essentially one single file so let's go ahead and work on making this actually
Banner API
5:08:50
show up on other people's websites so we're going to close out everything we're kind of at almost a new chapter of this application and inside of our API
5:08:57
we're going to create a brand new folder and this is going to be for products slash we want to get our product ID and
5:09:04
we want to get the banner and then directly inside that Banner folder we can create a file called route
5:09:10
.ts this is going to be for rendering out our entire thing so we can just say export function this is going to be an
5:09:16
async function called git this is going to retake in our request which is a next
5:09:24
request and it's also going to take in our prams which is our product
5:09:31
ID so we can say product ID is a string there we
5:09:36
go looks like I have some spelling or things wrong get that spelled properly to pams and
5:09:43
make sure I also hook all this up correctly looks like I'm just missing a parentheses or not a parenthesis there
5:09:48
we go bracket and it looks like I also forgot another bracket right
5:09:53
there there we go now we can give that a quick save and that's all of our parameter information taken care of now
5:09:59
the first thing I want to do is get our headers so we're going to say headers just like that then what I want to do is I want to
5:10:05
get whatever URL the person is calling our page from because what's going to happen is on our products page they're
5:10:11
going to come to our products page and click add to site and they're going to copy this code and they're going to paste this code in their application and
5:10:16
it's going to call our site now we want to determine what URL they're calling us from because that is important in
5:10:22
determining which product they're associated with and we want to make sure that the product associated with this
5:10:27
URL is only ever called from that URL so let's get the requesting URL and this is
5:10:34
a little bit complicated to get from our headers map what we need to do is we need to get either the F that's where
5:10:40
they're coming from or we need to get the headers map. origin and this again
5:10:45
is going to be where they are coming from one of these is going to give us the correct information on where they're coming from if neither of these have
5:10:51
information so if our requesting URL is equal to null then we can just return
5:10:56
not found essentially anyone that calls this code not from the correct URL or if they don't have a URL they're going to
5:11:02
get the code not found the next thing we need to do is determine what the country code for the user is going to be so we
5:11:08
can say get country code and we're going to get that based on our request and let's create a function for that get
5:11:18
country code there we go this is going to take a request which is a next request and then inside of here we have
5:11:24
information that's really useful we can say Geo and this is going to give us their country and here we can say if
5:11:31
that is not equal to null then we can just return the request. goo. country so
5:11:37
if they have a country associated with them it's going to return that now unfortunately this does not work in
5:11:42
development it'll always return null in development and that's because it depends on your actual hosting provider
5:11:48
to provide this information so versel for example if you deploy to versel they will fill in this go information for you
5:11:54
so for testing purposes if our process. env. node environment is equal to
5:12:00
development well in that case we're going to return EnV and make sure we get that from our server we're going to
5:12:06
return our test country code so for some some reason we're not able to actually
5:12:11
get our country we're going to return to them a country code so for example in development and then when you're in a real world application this should fill
5:12:17
in its information for example if you're on ver cell so now let's implement this test country code inside of our
5:12:23
environment variables on our server test country code z.
5:12:28
string there we go and then inside of our EnV folder or EnV file I'm sorry I'm
5:12:34
going to create another section that's called development test country code and for now let's just say that I'm
5:12:39
currently residing in India so that way we can test what that looks like we can bring this entire section over into our
5:12:45
example and paste this in for example just like that so now we can test what this code will look like and here if our
5:12:53
country code is equal to null again return not found because we were unable
5:12:59
to find the country code for this particular user based on their Geo information so we don't want to do anything now the next thing I want to do
5:13:04
is call a rather complicated database query that's going to get our product our disc account and our country based
5:13:10
on whatever ID and country code we pass in so that's a rather complicated function that we need to worry about
5:13:16
creating so we can come all the way over into our server into our database go into the product section and let's
5:13:21
create that exact function so all the way down here async function we want to get this
5:13:28
this is the internal version of the function just like that and it's taken in two
5:13:34
parameters an ID and a country code our ID is a string and our country code
5:13:42
is a string as well now inside of here we're going to get some data that's going to be calling await dbquery and we
5:13:48
want a query on the product table and we want to find the very first product where our ID is equal to the particular
5:13:54
ID that we have here so what I can do is I can say where and I can make sure that I get all
5:14:01
this as a function I want to get equals and I want to get my ID as an ID column
5:14:08
and what I can say is equals my ID column is equal to my ID there we go
5:14:13
that works super great so I'm just getting the first product with that particular ID then I want to get only
5:14:19
specific columns so I'm going to say that I want to get the ID and the clerk user ID are the only columns I want to
5:14:24
get from this so this is everything for getting our product next I want to get specific things for that for example I
5:14:30
want to get all of my customizations I'll set that to true I also want to get my country group discounts I'm again
5:14:37
going to specify only certain certain columns so I'm going to say that I want to get just the
5:14:42
coupon and I want to get just the discount percentage those are the only things that I care about from my country
5:14:48
group discount but I also only want to get the country group discount for a specific country so I'm going to come
5:14:53
down here I'm going to get all my country groups just like that make sure I put
5:15:00
this inside of an object there we go and for my country groups I want to get
5:15:05
specific columns and actually I don't want to get any columns I don't want any colums from my country groups instead
5:15:10
what I want to get from my country groups is the countries themselves so here countries and it looks like I might
5:15:17
have a typo somewhere because this is not showing up properly let's see here country group just like that so yes it
5:15:23
should be country group because there is only one country group per country group discount then I want to get all of the
5:15:29
countries and for the countries I want to get Only The Columns of ID and name
5:15:34
that's all I care about for my country I want to get just one country and that's because I'm going to throw in a wear
5:15:40
Clause here and this wear Clause is a rather simple wear Clause that essentially just gets me the country for
5:15:45
a specific code so I'll say equal and code and I want to get it where my code
5:15:52
is equal to my country code just like that so all of this rather complicated code all it's doing is getting a product
5:15:59
the product customizations and the discount for the product for the particular country ID now I need to do a
5:16:05
little massaging to make this data look correct so first I can get my
5:16:12
discount and that is going to equal to getting my data and I want to get the country groups
5:16:18
discounts. find and I want to find the discount where the discount. country group countries. length is greater than
5:16:25
zero So based on my wear Clause here I'm only getting the country with a specific code so only one of my country groups
5:16:31
will have a country and it will have exactly one item in the array so what I'm doing here is I'm saying hey find me
5:16:36
the exact group that has a country that'll be my active discount for this user then I want to get my country which
5:16:43
is just getting my discount. country group and I want to get the very first country because I only got one now what
5:16:49
I can do is I can get my product information so this is just going to be if my data is equal to null or my data.
5:16:56
product customization is equal to null then I'm going to return undefined otherwise I'm
5:17:02
going to return down an object that contains my data. ID my clerk user ID
5:17:08
Which is my data. clerk user ID and my customization which is my data. product
5:17:13
customization so this is all my product related information so down here I can
5:17:19
return whoops return my product I can return my discount which is going to be
5:17:26
if my discount is equal to null then return undefined otherwise return a coupon which is my discount.
5:17:35
coupon and my percentage which which is my discount. discount percentage finally I can add in
5:17:42
the country here as well I'll just put it at the top like that so now I have my product my country and my discount they
5:17:48
all could be undefined if they're not able to be found but hopefully they are able to be found so here I should be
5:17:53
able to call this function actually after I create the internal version so I have the internal version I need to create the non- internal version so
5:18:00
we'll just come up here copy one of these that's the create one we don't want that we'll copy this get right here
5:18:06
and this one I'm essentially going to call this function so it's going to call this particular function this is the
5:18:11
non- internal version and for my tags I need to see exactly what I'm using also I want to make sure my props are exactly
5:18:17
the same so I'll copy the props paste those into here and then make sure I pass those props into my
5:18:24
cache function now for this one I'm getting a specific or specific ID here so I can say get ID tag and pass it in
5:18:32
my ID I also am getting information from my countries so I need a global tag for that Global tag get Global tag there we
5:18:40
go and this one is for my cach key tags. countries I need to do
5:18:45
the exact same thing for my country groups because when either of those change I obviously am querying both of
5:18:51
those datas so now with that done hopefully once I close all this down go back over to here I can import this and
5:18:57
this will essentially get me my product my discount and my country but any of them could be null the first one I'm
5:19:03
going to check is if my product equals null if my product equals null then that means one of a few few things number one
5:19:10
this is a bad product ID and it doesn't exist or two it means that the page that this information is being loaded on does
5:19:16
not line up with the actual user ID that we're associated with so obviously that would be another problem and actually I
5:19:22
just realized we're not even using our requesting URL so I should make sure I pass in the requesting URL to this
5:19:28
function so this should take in a URL which is a string and that should obviously be
5:19:34
passed down into here as well and then the internal function should take in a URL and here it should take in the URL
5:19:42
because I only want to get this where the URL is also equal so we'll say URL as our URL column we can add in an and
5:19:50
here and we'll say and are equals for our URL column is equal to our URL that
5:19:57
way this only loads on the specific URL that we specified so now if we go back into here and our product is equal to
5:20:04
null that means that we either loaded it on an incorrect URL or the user doesn't have access or something like that so
5:20:10
again return not found now if we do have a product though that means that we can actually log this as a view for our
5:20:16
users so we can say create product view this is going to be a function we're going to create in just a second because
5:20:22
this is going to count towards their subscription usage if they go to the subscription page here it's going to count against their monthly usage so we
5:20:29
can say for a specific product ID we're also going to do it for our country ID
5:20:35
which is country. ID and this country ID could be null which is perfectly okay and user ID
5:20:42
which is our product. clerk user ID now the reason it's okay that our country IDE is null is if for some reason the
5:20:48
user coming from a country that we don't recognize in our database we still are going to log that as a view to the
5:20:54
particular user and we'll just Mark that as undefined inside of our database that's how the parody deals clone is or
5:20:59
that's how parody deals the actual site works so that's how our site's going to work as well you could change that if you don't like how that works so let's
5:21:06
go into our product views and we need to create a function for creating things so
5:21:11
export async function this is called create product view just like that and
5:21:17
I'm actually just going to paste this code in it's super simple we take in the product ID country ID and user ID and all we do is we just insert that into
5:21:23
our database and then we revalidate our cache for that particular product View and we can even do it for the ID as well
5:21:29
I didn't include that in here so let's throw in the ID so instead of row count here we're going to be
5:21:36
returning and we're going to get the ID which which is our product view table. ID just like
5:21:42
that so this is going to give us an array with an ID just like that so if our ID actually let's just call this new
5:21:51
row there we go new row is not equal to
5:21:57
null then we can pass along our new row. ID there we go now that's working much
5:22:02
better we're creating our product View and we're making sure we're setting all of our caching information now back in our route here we can just make sure we
5:22:09
create that ra row just like that now the next thing we need to do is to check to see if they can actually show this
5:22:14
Banner so I'm going to come in here I'm going to say can they show the banner which is something that I'm going to create a function for just like this can
5:22:22
show discount banner and then here we have the ability to do all this stuff so to get the can show discount Banner I'm
5:22:28
actually going to do that up here can show Banner is equal to that so this can
5:22:34
show Banner function is just a permission we need to create so let's do that real quick and then I'll explain how all the rest of this code is working
5:22:40
so inside of our server we're going to go into our permissions export a async
5:22:46
function can show banner and that's going to take in the exact same user ID all the rest of these take in and I'll
5:22:52
just copy this code because it's very similar so instead of getting our product count we're going to get our product view count just like that and
5:22:59
this is a function that we've already implemented I just need to make sure I pass in the start date and this is going
5:23:04
to be a new date and this is going to be start of
5:23:11
month there we go so just getting all the count for the entire month there we go I just realized while
5:23:18
editing this video that I actually forgot to update this tier section down here so this should be called the
5:23:25
product views and then obviously the product views must be less than the maximum number of views that they can
5:23:31
have so max number of visits I forgot to update this when I was doing the video but here is the updated code and when you download the code from GitHub it
5:23:37
will be up updated now if we go back to this particular page we can import this function and this will return true if
5:23:43
they have less than in our case 100,000 pricing page visits so first we check how many pricing page visits they have
5:23:49
and make sure that they have few enough that we can actually do this then we add a brand new visit to it and then if we
5:23:54
can show the banner we're going to make sure we do so if we can't we return not found if our country or our discount is
5:24:00
null we also return not found and then finally we get to the point where we return JavaScript down to the user all
5:24:06
of this code up here is just checking to make sure can this user see this JavaScript then we can actually return
5:24:11
the JavaScript so I'm going to call a function called get JavaScript just like that and this is going to take in our
5:24:18
product our country our discount and it's going to take in can remove branding as well
5:24:25
which takes in our product. clerk user ID there we go so now let's create this simple function we'll do it down
5:24:32
here just like that now for our actual typing of everything I'll paste that in we have our product which has all of our
5:24:38
customization information our country name our discount and if we can remove The Branding then inside of here what I
5:24:44
want to do is I want to take my banner component and render it as static markup so there's a function called render to
5:24:53
static markup and we can get this here from awaiting the import of
5:25:01
react-dom server there we go and now you may think why would I await this import
5:25:06
directly inside of here when I could just just import it at the top of my page and that's because nextjs actually
5:25:12
prevents you from importing this function if you import it it immediately crashes your site it's annoying I don't
5:25:17
know why they do that but if you want to be able to import this function you need to actually do it in this Dynamic import
5:25:23
way so that's why we're doing this to get around next js's limitations then we can return some string and the string is
5:25:29
just going to be JavaScript code so I can say const Banner is equal to
5:25:35
document. create element and we're going to create a div and this is just code that's going to run on the
5:25:42
user's browser then I can come in here and set the inner HTML inner HTML is
5:25:47
going to be equal to and this is where I want to render all of my stuff to a static markup so inside of here put some
5:25:54
quotes like that and I can say render to static markup and I can pass it in create element whoops which allows me to
5:26:01
pass in my element which is a banner that's my component and then we need to pass in all the props for this
5:26:07
particular component that we want to render so let me make sure I get all my parentheses closed up there we go so now
5:26:13
inside of here I can pass along my message this is my product.
5:26:18
customization location message then we have my mappings so our country maps to our
5:26:25
country. name my coupon maps to my discount.on and then finally my discount
5:26:33
Maps 2 taking my discount. percentage multiplying it by 100 just like that and
5:26:39
let's make sure this is spelled mappings and this actually needs to be a string so we'll just convert this to a
5:26:45
string there we go that gives us our discount information now we can pass along our
5:26:53
customization which is our product. customization and then finally can remove branding whoops remove branding
5:27:00
is the last thing we need to pass along so this is all the stuff to pass along to create our Banner now that we've created our Banner with all the inner
5:27:07
HTML that it needs needs we can come in here and we can do a quick document.
5:27:12
query selector we want to get a query selector specifically for whatever our product.
5:27:19
customization Banner container is so I want to search for that Banner container I then want to prepend onto that all of
5:27:26
the children of my banner component just like that so essentially
5:27:32
I'm creating this Banner component filling it with all my HTML and taking everything from it and prepending it to
5:27:37
the beginning of this there we go and now the final thing that I want to do is I just want to call replace just like
5:27:44
this and I want to remove all the white space information from here that I don't actually need so I'm just going to copy
5:27:49
over this quick replace statement this replace statement just gets rid of all the additional new lines in my code to
5:27:55
make sure everything is super clean and tidy because obviously with using this syntax right here of these back ticks it
5:28:01
actually leaves new lines in your code and JavaScript won't know how to parse that potentially so I'm just getting rid of all those new lines and this right
5:28:07
here is going to return to me some JavaScript that I'm getting right here for my response and the last thing I need to do is make sure I tell my
5:28:14
response that this is Javascript so in my headers I'm going to pass along the content type header of
5:28:21
text/javascript so I'm essentially anytime someone calls this API they're either going to get not found or a bunch
5:28:26
of JavaScript on their page so now let's test and see if this actually works I'm going to go over to my products page I
5:28:31
have this product right here for Local Host 5500 I'm going to try to add that to a site and click copy code now this
5:28:38
is a site right here that just has some random text on it I'm just going to paste this JavaScript script tag right
5:28:43
into here that's all I need to do and now I can essentially access this site on Port 5500 so if I open that up this
5:28:50
is that site being accessed on Port 5500 and when I refresh it's currently not showing me my application I'm at the URL
5:28:58
1271 5500 and if I look here it specifically specifies the URL must be Local Host 5500 so let's make sure we go
5:29:05
to Local Host 5500 and see if that works you you can see we're on that Local Host and it's still not working I think part
5:29:11
of the reason why this is is because we need to make sure we remove the trailing Slash from our requesting URL so when we
5:29:18
get our product Banner we have our URL here and all the way down where we're using that internally I want to make
5:29:23
sure that we remove the trailing Slash from it whoops that's the wrong one product Banner there we go and here I
5:29:30
want to say remove trailing slash and pass in my URL
5:29:36
just to make sure that's not the potential problem we're having let's refresh it looks like that didn't fix the issue so now the best thing that we
5:29:42
can do is just add in some console logs to see what's going wrong the very first thing is just let's see if we get to
5:29:47
this particular point we'll just say hi right here give this a quick refresh check out our console and see we are
5:29:53
printing out high so it's getting to that point let's get to this point and we're going to print out our product
5:29:58
hopefully this prints out something instead of null we'll refresh and we'll scroll up and we do have all of our product information so we know we're
5:30:05
getting to that point that's working fine the next step is we can down here and see can we show the banner so let's
5:30:10
check to see if that works give that a quick refresh and it says we can show the banner so now let's check to see if our country and our discount are
5:30:17
possibly set to null so give this a quick refresh here and it looks like in our case our country is India and our
5:30:23
coupon is set so obviously all of that is correct we're getting all the way to this JavaScript section so maybe
5:30:28
something in our JavaScript is actually Incorrect and if we look unexpected identifier text you can see there's
5:30:34
currently a problem with our code so let's go to the sources Tab and see what are actual JavaScript looks like that's
5:30:39
being imported so we give this a quick refresh pull this over and you can see Local Host 3000 it's importing this
5:30:45
particular Javascript file so we're getting our document creating the element setting the banner HTML and as
5:30:50
you can see I'm using double quotes multiple times so I need to get rid of one of those sets of double quotes so
5:30:55
here change this to single quotes change that to single quotes that should fix the problem refresh and you can see hey
5:31:01
our Banner is showing up and it's being stuck directly to the top of the page which is exactly what we want if we were
5:31:06
to go ahead and then change change the url of this so let's say edit and we're going to change the url so it's only on
5:31:12
5501 give that a quick save it's been updated now if I come back to here and refresh you can see it no longer shows
5:31:18
up on our page also if we go to our subscription you can see we've had seven monthly usages because we viewed this
5:31:24
page seven separate times and if I refresh this a bunch of times you'll notice it doesn't actually add any usages as you can see here it's still
5:31:31
set to seven that's because it's not able to show because the URL is incorrect but if I were to go back to
5:31:36
our product change the url back to what it should be so we can edit this back to 5500 click save now when I go here and I
5:31:44
refresh the page a couple times showing this banner and go back to my subscription you can see now we have 11
5:31:50
out of 100,000 pricing page visits so now the nice thing here is we're finally to the last section which is just
Analytics Page
5:31:55
dealing with our analytics and honestly it's not too bad other than a few rather complicated javascri I'm sorry SQL
5:32:02
queries really that's the only thing complicated about all of our analytics so let's just make this a little bit easier to work with we're going to
5:32:08
minimize and close everything down again because we're kind of at a new section and what I want to do in my dashboard is
5:32:13
create a new folder called analytics and inside of here I'll create a page. TSX
5:32:20
so we'll export a async function make sure it's
5:32:26
default this is going to be called analytics page now this is going to have some
5:32:33
search prams on the page so we'll say search prams just like that and to type out our search
5:32:41
prams whoops search prams we're gonna have a few different parameters first of
5:32:47
all we're going to have an interval so do we want to do it last s days last 30 days and so on which is going to be a
5:32:52
string we're going to have a time zone which is going to be a string and we're going to have a product ID which is
5:32:58
going to be a string and all of these are optional whether or not we specify them or not it doesn't really matter so
5:33:03
here's our analytics page let's come in here return null just so we have something showing up and if we go to
5:33:08
that page you can see it's showing nothing now just like with all of our Pages we're going to check for our user ID using this off to make sure we have
5:33:15
access to that to do all of our different queries that we need now for our application I'm going to come in here and I'm just going to render out a
5:33:20
simple H1 for the analytics at the very top of our page so we have that showing up and then what I want to do is I want
5:33:25
to check to see if the user has permission and the permission is going to be the can access analytics
5:33:31
permission if they have access to that I'm going to render this otherwise I'll render out a fallback and inside of here
5:33:37
I want render out essentially a flex column grid layout so Flex column with a
5:33:42
gap of eight and inside of here I want to render out each of my different grids inside of a card I'm sorry each of my
5:33:48
different charts inside of a card so we're going to have like a views by Day card and we're going to render out all
5:33:53
the information for that make sure I spell that properly we're also going to have different charts as well so here
5:34:00
we're going to have a views by PPP card and then finally views by
5:34:06
country card there we go so we can determine where all these views came from for different analytics sections
5:34:11
now each of these cards is going to be nearly identical I'll Pace down exactly what they look like and I'll cover each
5:34:16
one of them individually so for our cards we just need to make sure we import all the different things that we're using inside of these cards and
5:34:23
then finally each of these cards has essentially three different things that go on first we have chart data that we need to get based on a function that's
5:34:30
accessing our database we'll comment that out for now as well as the props that we have the next thing we have is a card that says like visitors per day and
5:34:36
then it renders out what that chart is given the data we get from our database and as you can see this exact same
5:34:42
pattern repeats for all three of our different charts so each one of them renders out a card it gets data from our
5:34:47
database and it puts that inside of a chart so if we remove that you can see we just have titles with no charts at
5:34:52
all so that at least is giving us a starting point for our application so to get started I'm going to focus on the
5:34:57
views by country card because that is going to be the easier of the ones to implement and then once we understand
5:35:02
how that works the rest of them should relatively fall into place so let me make sure I get our props in here just
5:35:08
like that make sure that they have all of the typing information correct for them there we go that's exactly what we
5:35:14
need so now we need to create this git views by country chart data that's going to be inside of our database folder so
5:35:21
in our server in our database and our product views that's where we're going to access this information we can just
5:35:26
minimize all these ones that we already have existing and I want to create a brand new
5:35:32
function export function get this information just like that and this is
5:35:38
going to be pretty much exactly what we have up here but obviously the internal function is going to be this internal
5:35:44
function the tags I'm going to come back to so we're going to get those in a little bit and then we want to make this internal version of the
5:35:51
function now before we start working on this function the very first thing we need to do is to specify a constant
5:35:56
variable called chart intervals and this is just going to make it really easier for us to swap between like last 7 days
5:36:03
last 30 days and so on so for example I could say last s days and that is going to have information
5:36:09
like a label which is last 7 days and it's going to have a start date for example make sure I spell that properly
5:36:16
so we could say start date is going to be sub days and we're going to take a
5:36:21
new date and we're going to subtract 7 days from it so this is essentially going to be 7 days ago now we obviously
5:36:28
want to do this for all the different fields we're going to have I'm only going to be creating three just because
5:36:33
it's going to be simpler but you can create as many as you want so let's go all the way to 365 this one is subtract
5:36:40
30 days last 30 days last 365 days is
5:36:45
going to be 365 just like that so now with this chart interval we essentially can get
5:36:51
all the information we need for how to do these queries and how to display them to the user so let me get our props
5:36:56
typed into here we have our time zone product ID user ID and interval and the time zones required product ID is
5:37:02
optional because we can do something for all the products instead of just one our user ID is required and the interval is
5:37:07
is essentially just going to be either last 7 days last 30 days so on if I hover over the type you can see it's going to be one of these different types
5:37:13
of intervals so it's going to be the data directly inside of one of these different intervals now this is going to be by far the most complicated query
5:37:19
these three queries are but the nice thing about these queries is that we have drizzle which makes writing complex queries possible and easier than
5:37:26
anything else so the very first thing I want to do is convert everything to the correct time zone so I'm going to get my start date which is a start of day and I
5:37:33
want to get that to a zoned time that's going to come from a new library so we'll come into here we'll just cancel
5:37:39
out of that stripe stuff npmi dat FNS TZ that's the time zone specific version of
5:37:46
the library and we're actually getting an error and that's because we don't even need this Library anymore literally
5:37:52
today as I'm recording this they updated the date FNS library and added time zone support so we don't actually even need
5:37:58
this Library anymore and we can do this directly in date FNS so to get the start of the day we're going to say new date
5:38:04
just like this and actually this is not a new date this is our inter dat so we're going to get the start of
5:38:10
whatever our start date is and then we're going to convert that to our time zone so we can just say in TZ which is
5:38:15
coming from date FNS we'll have to probably manually import this import TZ from date FNS SL TZ and it's going to
5:38:24
be at dat FNS TZ so we just put an at at the front of that and we will need to actually install this Library so we'll
5:38:31
just come in here install the new date FNS Library that's built into date FNS which is incredibly nice make sure I all
5:38:37
that properly that should install the brand new library for us there we go so now what I can actually do is make sure
5:38:43
that this Imports properly looks like it did and down here I can call this TZ function and pass in our time zone there
5:38:49
we go it'll now convert this to the correct time zone the next thing I need to do is to actually get a subquery so
5:38:55
I'm going to get our product subquery there we go this is going to be equal to calling get product subquery
5:39:04
and a subquery inside of drizzle is just a way for us to combine multiple queries together in an easier to use way I'll
5:39:10
show you what I'm talking about so we're going to get a user ID which is a string I'm sorry we don't need to type this here and a product ID whoops product
5:39:19
ID there we go so now we can create this function function just like that this is
5:39:25
going to take in a user ID which is a string and a product ID which is a string or it's
5:39:31
going to be undefined there we go and now what we can do in here is we can return d Dot
5:39:37
and there's this dollar sign width we need to give it a name in our case it's products and then we can specify what we
5:39:43
want this to represent and this is just another DB query so in this case we're going to be selecting all of the
5:39:48
products that we can actually access using this user ID and product ID again we're breaking our query down into
5:39:54
multiple smaller chunks which makes working with it much easier so we're going to be selecting from the product table all of the information where and
5:40:02
we want to do an and query and an equals query make sure I import equals there we go and we we want to check to see when
5:40:08
the product table. ID or I'm sorry user ID is equal to our user ID just like
5:40:14
that and we also in here need to add another check but we only want to add this if our product ID is not equal to
5:40:20
null so if it's equal to null we're going to return undefined otherwise we're going to return our product table.
5:40:28
ID is equal to our product ID so what this is doing is going to check okay get all the products for our particular user
5:40:34
and if we passed along a product ID only get the product for that specific ID so this right here is going to be a
5:40:40
subquery we can use that gives us all the valid products so here is essentially a limited list of the
5:40:45
products that we have access to I'm then going to create another subquery but this one is for our product views so
5:40:51
we'll call this product view subquery I might as well just call it SQ same thing up here just make it a little bit easier
5:40:56
to work with this is going to be another DB this time I'm going to say DB dollar sign width this one is product views and
5:41:05
then this one is going to be as another DB and to be able to combine together subqueries so if I want to use this
5:41:11
products subquery in my new query I can just say with and pass along the product
5:41:17
subquery so products subquery just like that so now I have this as a table that I can join on and so on so what I want
5:41:24
to do is I want to select some information I'll get to what I'm selecting in just a little bit I want to get it from the product view table and I
5:41:30
want to do some joins so I'm going to put an inner join here on my product SQ so I'm going to be joining on this
5:41:36
particular table this subquery that I created where my subquery whoops
5:41:43
subquery doid is equal to my product view table. product ID so here I'm
5:41:51
joining these two tables together so I have a limited list of only the products that I have access to and I'm combining
5:41:56
them with my product view table to get all the product views for the products I have access to then I want to get the
5:42:02
information for the country as well so I'll join my country table where my country table. ID is equal to the
5:42:10
product view tablecountry ID so now I'm getting all my product and Country information from here and I only want to
5:42:16
get it where the visited at row visited at row right here is greater than or
5:42:24
equal to visited at and start date there we go so how do I get this visited at
5:42:30
row well that comes from my select I can come in here and say that I want to get a visited at row and this visited at row
5:42:37
is going to be some custom SQL because I need to convert everything using time zones so I'm going to pass in my product
5:42:42
view table. visited at and I want to convert it to a Time Zone by saying at time zone and passing in the time zone
5:42:49
that I want to convert to now to make sure that everything lines up and works properly I need to actually inline my
5:42:54
parameters here so that way it knows what time zone to convert to and I need to give this an as property just to make
5:43:00
sure that it actually will render properly if you don't give your custom SQL an as property it won't run inside
5:43:05
of drizzle so this gives me my visited ad converted to the correct time zone and I'm comparing it against this time
5:43:11
zone right here the next thing that I need to do is to get my country group ID which is my country table. country group
5:43:19
ID I want to get my country name which is my country table. name and then finally
5:43:27
country code which is my country table. code so this is just getting all the
5:43:33
information for each one of the visits on my particular website based on the name and code as well as the group ID
5:43:39
that's associated with them so with this product subquery I have my products and with this view subquery I have all the
5:43:44
views now I just need to get the data that I want so here I can return Calling
5:43:50
await DB dowith and I want to use that product view subquery that I just
5:43:55
created and I want to select only specific columns I want to get the country name which is my product view
5:44:01
subquery do countryname I want to get my country code which again is my product
5:44:07
subcount code and I want to get my views which is just going to be a count of all
5:44:13
of the different visited at rows that I have inside of here so visited ad there we go make sure this is an async
5:44:19
function so I can return that awaiting that I have here so I'm selecting all those rows I want to start with my
5:44:26
country group table just like that and I want to do a join on my product view
5:44:32
just like that and I want to get where it's equal my product View whoops
5:44:38
product view subquery doid or I'm sorry country group ID is equal to my country
5:44:44
group table. and actually I don't even think I need to do this additional step of joining on this country table CU I'm
5:44:51
not actually using the country table data so I can essentially remove all this information about the country group
5:44:56
I don't need any of that so I'll get rid of this all my SQL for my visited app I'm actually just going to put in line
5:45:02
directly right here so I can get rid of all of that right there so that's SQL has been directly inlined there and
5:45:08
instead I'm just going to change this to be my count and this is going to count essentially the visited at row itself so
5:45:15
this is going to be my product view table. visited at because I don't care
5:45:20
about the time zone when I'm doing counting so I don't need to convert the time zone at all then what I can do I don't need any of this particular code I
5:45:26
already have the country name and country code up here so I can get rid of all of this I can make sure that this is
5:45:32
not even a subquery so I can just get rid of all this subquery related stuff here we go just call a wait on this and
5:45:39
return this so this should be a little bit simpler than what I had before there we go looks like I'm probably missing missing a parentheses or bracket there
5:45:46
something is being missed completely here let's see parentheses parentheses maybe I have an extra set of
5:45:52
parentheses there we go so I have all my joins I have my wear Clauses all I have left to do next is to do my grouping so
5:45:57
here I'm going to do a group bu and I want to group by my country
5:46:04
code make sure I spell that properly make that into a function and I also
5:46:10
want to group by my country name so we're just going to put an array in here with our country code country name just
5:46:17
like that and then I also want to order them and I want to order them by My Views which is going to be my account I
5:46:23
might as well call this views though so here we go
5:46:28
views and we're going to order in the descending order My Views there we go so whichever one has
5:46:34
the most views is going to show up first in my list of orders and I also want to only get 25 just
5:46:39
because I can only really fit at most 25 different countries in my chart so this right here I know it's a rather
5:46:45
complicated query I'll go through it in depth first I'm getting only the products that I have access to then what
5:46:50
I'm doing is I'm counting up all my views for each country based on their name and code that's where this group by comes in I'm only grouping by country
5:46:56
name and code and for each grouping of country name and code count how many views have that country name and code
5:47:02
then I'm doing a couple joins here to make sure I'm only joining on the products I have access to and I'm joining on the country table to get
5:47:08
information for the country this little query right here is making sure I only get data after my current start date and
5:47:13
then I'm just ordering everything in the correct order so that should be everything for this function I'm going to copy over all of this into here so I
5:47:21
can make sure I get all the props being passed down for both of these here same exact
5:47:27
thing pass it in my props and then I need to figure out exactly what my tags are going to be so the very first user
5:47:32
tag that I'm going to have here is going to be for my user ID and the cach tags. product views because
5:47:39
I'm getting all the product views I'm also going to have an ID tag so get ID tag that's going to be for my product ID
5:47:47
if there is one and then I'm going to get my cach tags.
5:47:52
products there we go and this particular tag is going to depend on if there's a product ID or not so if product ID is
5:47:59
equal to null then I'm going to render out a git user tag for my user ID and
5:48:05
the cach tag tags. products there we
5:48:12
go so essentially if I have a product ID give me the tag for that one otherwise give me a tag for all of my users
5:48:18
products then I want to have a global tag that's because I'm getting all of my countries so Global tag on my cach tags.
5:48:26
countries there we go so that's everything that this particular function is using and hopefully with all of that
5:48:31
done we should hopefully see back onto this page if I import this function maybe I'll have to import it right here
5:48:37
there we go give that a quick import and make sure I get the correct information up here there we go that should give me
5:48:43
all the different props I need all I need to do is create my actual chart and pass in the correct props up here so if
5:48:49
we look at this you can see I have my interval that I need to pass in I have my time zone that I need to pass in my
5:48:54
user ID and my product ID so we already know the product ID that's going to be
5:49:00
my product ID that's coming from my search pams and to make it a little bit
5:49:06
easier easier we can actually just get that information out here so we can say my time zone is going to be my search time zone or UTC by default and my
5:49:13
product ID is going to be my product ID so I don't even need to get that for my search frames anymore same thing for time zone that's just going to be my
5:49:19
time zone my interval is going to be a little bit more confusing so interval is either going to equal chart interval and
5:49:26
I want to get it for my search prams whoops search prams do interval just
5:49:31
like that or if this doesn't exist I'm going to get my chart interval. last
5:49:36
Days by default now this you can see is throwing me an error because this must be of the key of type of chart intervals
5:49:44
so I'm just going to manually cast that saying hey it's one of these and if it's not just give me essentially something that's from the last seven days now I'll
5:49:51
expand my screen a little bit so all the code fits on one line looks a little bit cleaner that way and my interval I can now pass in just like that and the user
5:49:58
ID I already have access to that just like that so now I have all the information I need inside of here if I
5:50:03
scroll all the way down I have my chart data which is views country name country code now all I need to do is render this
5:50:09
in a chart and we're going to use Shad CN for all of their charts now to add Charts it's relatively easy we can just
5:50:14
call Shaden add chart that's going to add the charts into our application and then working with the charts is not too
5:50:20
difficult let's make sure we don't overwrite any of the files we don't want to overwrite and now we can create this chart Library function so inside of our
5:50:26
components we're going to create a brand new folder called charts and inside of here is we're going to render out our
5:50:32
view actually I think I copied it so there we go TSX this has to be a client component when you're dealing with
5:50:37
charts and then we can export that function just like this now this chart function is going to take in our chart
5:50:45
data as its only prop and the type of this chart
5:50:51
data is going to be a country country code which is a string
5:50:57
it's going to be a country name which is a string and it's going to be views which is a number make sure I
5:51:04
spell all of that correctly and now inside here we could just return null for example and at least that'll render out properly and it'll let me import
5:51:11
this right there it looks like our chart data is maybe not lining up properly let's make sure I spelled country code
5:51:16
country name and Views that looks like it was all spelled correctly obviously it should be an array of data though that fixes all the errors that I had
5:51:23
inside of here so now let's go ahead and Implement what our chart should look like so the very first thing I want to do for this particular chart we possibly
5:51:29
could have no data at all so I'm going to say if our chart data. length equals zero just render out that there's no data and we're going to put that in the
5:51:35
middle of our screen next what I want to do is I want to render out a chart container which comes directly from Shad
5:51:41
CN this chart container takes two things the first is a config which is how it hooks up different things so we'll say
5:51:47
chart config just like that and then finally we need to specify some class names and if you want things to be
5:51:52
responsive you generally need to have a minimum height so we'll say Min height of 150 a Max height is going to be 250
5:51:59
pixels whoops 250 pixels there we go and we're also going
5:52:05
to say that the width is is full so it spans the entire container now to get this chart config we can come up here we
5:52:11
can say con chart config equals and essentially for every single row or type of data that you have you need to have a
5:52:17
chart config with a data Row in it so in our case views is the only thing that we're showing inside of our data as a
5:52:24
bar in our bar chart so that's the only thing I'm going to set a column for here so I'm going to say views and I'm going
5:52:30
to give it a label which is visitors there we go and then we can give it a color in our case I'm going to use use
5:52:36
the HSA color which is based on our accent
5:52:43
variable there we go so now we have our chart config and everything done inside of our chart container we need to render
5:52:48
out a chart and in our case we're going to use a bar chart from recharts that's the library behind the scenes we want to
5:52:54
render out the accessibility layer and then our data is just equal to our chart data there we go now inside of
5:53:01
this bar chart we want to render out what our xaxis is going to look like our data key in this case is going to be
5:53:06
country code so it's going to put the country code on the x-axis we're going to say that for a tick line we're going
5:53:12
to set that to false and then finally our tick margin is going to be equal to 10 just to space things out a little bit
5:53:19
now let's just make sure we close that off and import our X access and now we have that showing up you can see this
5:53:25
column visited at does not exist so there's problems with my query that I need to fix so let's go ahead and actually fix that before we go back so
5:53:31
inside of product views here we can scroll all the way down and it's saying that this visited at column when I doing my count on does not exist I think I may
5:53:38
just be able to remove this as section right here because I don't actually need that now that it's no longer in my select statement and that may actually
5:53:44
fix the problem and it looks like that did and you can see down here visitors per country we have India showing up that's the only country I've faked doing
5:53:51
anything from so right there we can see that that is showing up there's some other errors inside of this looks like
5:53:56
just some typing errors that should hopefully resolve itself in just a second but for now I'm going to go back and finish out the rest of this chart so
5:54:02
we're going to come in here with a Y AIS so we can actually see our bars so we're going to have a tick line equal false on
5:54:08
this one we're also going to come in here make sure I import this there we
5:54:13
go we're going to have a tick margin of 10 just like the other one we're going to make sure allow decimals is set to
5:54:20
false it doesn't make sense to have half of a person so obviously get rid of that and our tick formatter is going to
5:54:25
format this as a compact number because these numbers could get quite large there we go that's our y AIS done next
5:54:31
thing we're going to render is our bar that's probably the most common thing we want to render so we data key for this one is going to be views that's just
5:54:38
whatever we have here that's our number views that's what we want to render here so for the fill of this particular thing
5:54:45
I'm going to set this to the variable which is our color views there we go and
5:54:50
that is just based on let we close that off real quick that is based on whatever
5:54:55
we put for our color inside of here so color views there we go now we give that bar from recharts give that a save and
5:55:02
now you can see that we have this showing up the last thing I want to do is add in a really nice looking chart tool tip so our chart tool tip is going
5:55:08
to have some content and inside that content is our chart tool tip content directly from Shaden and the label key
5:55:16
is going to be country name there we go so now whenever we hover over this it's going to use the country name instead of
5:55:22
the actual country code I believe the reason we're having this problem is because this should say name key instead
5:55:27
of label key let's see if that fixes it and there we go it says I in this should be our country name though not our
5:55:33
country code let's try refreshing that to see if that works maybe there's something wrong with the data coming back so let's
5:55:40
console.log our chart data to see if maybe there's a problem with our chart data we can just come in here look at
5:55:46
our actual page inspect that go over to the console look at this array you can
5:55:51
see it has country code and country name so that is correct it should be getting the name to be the country name let's
5:55:57
try setting both the label key and the name key so we'll say
5:56:02
Here country name just like that that's not working either so that's obviously
5:56:08
not ideal so I think our label key is just not pulling in the correct information honestly not a huge deal we
5:56:14
can just leave it as is give that a quick save and it'll just say I in instead now let's close out of that and
5:56:19
make sure all of our typescript errors yeah we have no more typescript errors it was just some weird typescript compilation thing but we have our entire
5:56:25
chart done now to be able to make sure that this works for multiple countries I'm going to go into my environment variable I'm going to change this to be
5:56:31
like us for example so now we have us and India both showing up so if I come over to here and refresh my page you see
5:56:37
I get no Banner oh there we go it is actually showing up you can see I get a banner for this particular discount code and now hopefully if I come over here
5:56:43
you can see we have 11 visitors from India and one from the US so this is working as we expected to for different
5:56:48
parody groups in different countries the next thing we have to do is to implement our last two charts and we'll do the visitors per PPP group because it's
5:56:55
actually relatively similar to the chart that we already created so what I'm going to do is I'm essentially going to copy this entire function down and
5:57:01
instead of saying country chart I'm going to say PPP and I'm going to come all the way up to here here where we have the non- internal version which is
5:57:08
right here copy that paste it down and where it says country going to change that to PPP now I may need to change
5:57:16
around what my different tags are so I think I'm going to need my country groups for this one so we'll say country
5:57:21
groups I'm just going to preemptively add that in there we'll see if we need it or not so now we have my PPP version
5:57:27
there we go close that down come all the way down to the PPP chart and this chart is going to be a little bit different
5:57:33
because we actually will need multiple subqueries we're going to need to get our product View
5:57:39
subquery and we're going to need to be able to get our normal subquery so this one's going to say with with a dollar
5:57:46
sign product views. as and we'll put this entire
5:57:51
query directly inside of here we can get rid of some of the stuff on this query like all this grouping by we don't need any of that and I do need to take all of
5:57:58
this SQL that I inlined and move it back out so this is going to say visited at is that as visited
5:58:06
at make sure I spell that properly there we go put a comma get rid of this views
5:58:12
section right here and we need to make sure we have a DB just like that so now this greater than is going to be a
5:58:18
function version which has our visited
5:58:24
at takes a function and this function is going to call greater than with visited
5:58:31
at start date there we go give that a quick save looks like all that's formatted now I don't actually need the
5:58:37
country name or country code for this one but I do need the country group ID because I need to get the name of the
5:58:42
group that's what this entire one is for the PPP group is our country group so country table Dot and I want to get the
5:58:49
country group ID so essentially I'm getting the visited at field and I'm getting the country group ID and I'm
5:58:55
making sure I only get the ones that are visited after the specific date so now that I have that subquery I can return
5:59:01
awaiting db. with this particular new subquery make sure I put it as a lowercase Q so it lines up with the rest
5:59:07
of my formatting I did I want to select specific Fields we'll leave that blank for now and we'll come back to it and
5:59:13
the most important thing is I want to get this from the country group table so there we go from our country group table
5:59:19
and I want to specifically join with the other table that I already have and in this case I want to do a left join
5:59:26
instead of an inner join on that product subquery and I want to do it where my product subquery dogr ID is equal to my
5:59:34
country group table ID and the reason I'm doing a left join here instead of an inner join is I want to get all of my
5:59:41
country groups and display them in my chart so even if I have zero views from the 30% group I still want to show that
5:59:47
on my chart as a null value so that's why I'm getting this as a left joint because this is going to give me every
5:59:53
country table even if there are no views associated with it if I didn't an inter jooin instead it would only give me the
5:59:58
tables that have or the country tables that have an actual product view associated with them which is not what
6:00:04
we want so now what I can do is all of my grouping so in my case I want to group by a specific field so we need to
6:00:11
do our select first so I want to get the PPP name which is our country group table. name and I also want to get my
6:00:17
views which is going to be calling count on my product views. visited field so
6:00:24
now here I can do a group bu which takes in a function we want to get that
6:00:29
visited not visited at the PPP name that's what I want to group on so we're going to say PPP name just like that
6:00:35
that's my group by field and then I also want to order so I'll come in here with an order by and I want to order by this
6:00:41
particular field as well so there we go and that's all it takes to be able to implement this function you can see it's nearly identical to what we did before
6:00:48
all I want to do is just get the country groups instead of the individual countries so we can minimize that down and we can actually use that inside of
6:00:54
this particular page so the PPP chart and all these parameters information we can use so I'm going to take these props
6:01:01
move them up here there we go make sure that I get the data from the corre cor chart same thing there and now I need to
6:01:08
make sure I get all the information I need from up here so just going to copy this
6:01:14
information paste it down in there it should be all the exact same information and I might as well do the same thing at
6:01:19
while I'm at it for this chart because it's obviously going to be the same data for that chart as well so now let's implement this chart and again I'm just
6:01:25
going to copy my existing chart because it's going to be somewhat similar so this one is views by
6:01:32
PPP there we go views by PPP chart and
6:01:38
now I want to get all my chart information but in this one it's going to have a PPP name instead of the country name and country code so same
6:01:45
thing for my chart config that's going to be the same this data should never be null because as long as I have a country grouop it should show up but just in
6:01:51
case I might as well just leave it in there then the next thing is I want to deal with having my chart so my xaxis is
6:01:57
my PPP name and nothing else and that should be the only thing I need to change for this chart to make it
6:02:02
actually work so let's give that a quick save and see if it works says views by PPP chart obviously I need to import
6:02:08
this component there we go now if I give it a save we give this a quick refresh you can see that now it's actually
6:02:14
showing all my different parody groups between 23 all the way all the way up to point or 1.1 now I do want to make one
6:02:21
slight modification to the way that this chart data is showing up so inside of this function here I want to just
6:02:28
create data which is equal to chart data map over each data point
6:02:38
I want to return an object which is going to take all my normal data but I want to take the PPP name and I want to
6:02:43
take whatever that name is and I want to make sure that I replace whoops
6:02:50
replace parody group with an empty string and this should never be null so
6:02:57
I didn't actually need this check there there we go so now essentially what this little bit of code is doing is removing
6:03:02
that parody group colon section at the start I don't really like that and now I can use that as my chart data instead
6:03:08
and if I give my page a refresh you can see that doesn't look like it quite worked that's because I forgot to put the colon here now we give that a save
6:03:14
and you can see automatically it has already cleaned that up drastically and if I open this up you can see now it has made my labels a little bit easier to
6:03:20
read and so on and I have had one visitor in the 0.9 to1 group and I've had 11 visitors in the 2 to3 Group which
6:03:27
lines up with my India versus US users so at least know that that is working now unfortunately this Visitors by day
6:03:32
chart that we have next is going to be the most complicated chart that we need to work on so let's go back over to that
6:03:39
product View and we need to essentially just copy over one of these charts let's just go ahead and copy this chart paste
6:03:44
it down and this one is going to be get views by day chart and then we want to
6:03:50
obviously copy up here the exact same thing this one is get views by day chart
6:03:58
and we want to get the internal version of that now the tagging for this one is going to be a little simpler and that's
6:04:04
because this table doesn't query any any of our country or country groups all it cares about is views and days so it only
6:04:09
queres our product and our product views table so at least our caching is slightly simpler but that is about the only Silver Lining because this is by
6:04:16
far our most complicated function we still need to be able to get our product subquery but we don't actually need our
6:04:21
start date because of the way that we're going to be writing this query and the way we're writing this query is we essentially want to generate all of the
6:04:27
days within our interval so if it's like last seven days I want to generate seven days if it's to last 30 I want to
6:04:32
generate 30 days and so on so I want to generate a series one for each day inside of my interval that way just like
6:04:39
this chart has rows for zero I want to also show days that have zero visitors as well so this products subquery that
6:04:46
we have right here is going to be really rather simple because I'm not actually going to join on any country tables and I'm not even doing any wear Clauses at
6:04:53
all instead I just want to get every single view for all of my products that are in my product subquery so my country
6:05:00
group ID is gone and this is replaced with a product ID that comes from my product subquery
6:05:07
doid there we go and that's the only thing I'm getting from here I'm getting my visited at and I'm getting my product
6:05:12
ID the big query the more complicated one comes in this section right here so we're getting this with our product view
6:05:18
so we have essentially every single view which has a visited that date in our time zone for every single product that
6:05:24
we have access to then what I want to do inside of here is I want to select specifically a date and this date is
6:05:30
going to be formatted in a rather different way than you may be used to so for now I'm just just going to return
6:05:36
this as undefined and we'll come back to this in just a little bit now for our from here again we're not going to be
6:05:41
querying any of the tables in our database we're going to create our own J table of data essentially an array of
6:05:47
data and we're going to get that from our interval and we're going to call that interval. SQL so each one of these is going to have a SQL section added
6:05:54
onto it now this SQL section is going to actually call the SQL function and it's going to call
6:05:59
generate series which is a postgress function which allows us to generate a series of data between a set of dates so
6:06:07
what we can do is we can take whatever the current date is and subtract seven days because it's the last seven days
6:06:13
and we can take that and go all the way up to the current date so essentially this gives me a series between whatever
6:06:19
the current date minus 7 is and the current date and I can say I want to do this in intervals that are one day
6:06:25
intervals so by using this code right here let me make this a little bit
6:06:31
bigger so it's easier to see I can say that I want to generate a series between 7 days ago and today and I'm using one
6:06:38
day intervals which is a type in typescript or in postest I'm sorry and I want to generate that with the name
6:06:43
series because I'm going to use that in other places so I want to do this exact same sequel in all of these other ones
6:06:49
so down here and down here so now for my 30-day one it's really easy I'm just going to subtract 30 days at one day
6:06:55
intervals rather straightforward this one is going to be much more complicated though because instead of just
6:07:00
generating this 30 days ago it's going to be 365 days ago and I want to do this using using one month intervals so here
6:07:07
I can say that I'm going to have a one month interval just like that but I need to be able to not just get the current
6:07:13
date but I want to get what the current month is so what I can do is I can say date trunk that's going to truncate my
6:07:19
date and I can say truncate at the month Mark just like that so it's going to
6:07:24
take whatever this date from 365 days ago is and truncate it at the month Mark and it's going to return to me
6:07:30
essentially a string with that same thing here I can do date trunk just like that I can truncate it on the month and
6:07:37
that's going to be whatever my current date is truncated at the current month this just makes it so that now I can
6:07:43
take any day in a month cut off all the day information and just be left with the month so now I can come up here I
6:07:49
have the interval. SQL and this is going to give me an essential array of data between whatever the current day is and
6:07:55
the day that I want to go all the way back to now the next thing I need is a way to group my days because all my
6:08:00
visited at has time all the way down to like the millisecond so obviously no two dates are going to be exactly the same
6:08:05
because they have millisecond level data so I want to be able to group my date using a date grouper function this is a
6:08:11
function that's going to take in a column which is either going to be SQL code or SQL do alist code it's
6:08:17
essentially just some random SQL code there we go make sure I import that type from drizzle and what I want to do is I
6:08:23
want to convert this into something that will convert my date to a more uniform date type so in my case I want this to
6:08:30
be individual dates instead of times I want to cut off all the time and get me just the date information so I'll say
6:08:36
SQL with a type of string is going to return to me a new date object from postgress using my column and I want to
6:08:43
make sure I inline the parameters here so what this little bit of line of code does right here is it's saying okay I
6:08:49
have a date that's coming in that has like time stamp information all the way down to the millisecond and I'm going to cut off everything except for the
6:08:55
current date so this is essentially how the date trunk function works but it's truncating everything except for the
6:09:00
date so it has like the year the month and the date but no time information I want to use the same grouping function
6:09:06
for both my last 30 days and my last 7 days but when it comes to my last 365
6:09:11
days I want to truncate this using that date trunk function that we've already used so I'm going to say date trunk just
6:09:17
like that I want to truncate it down to the month now the final thing I want is some way to format these dates so that I
6:09:22
can easily display them inside of my form so I'm going to come in here with a date
6:09:28
formatter just like that and this is going to take in a date object from JavaScript and for example on this one
6:09:35
I'm going to use a month formatter and I'm going to format my date so instead of typing out what the month formatter is I'll just paste it down here it's a
6:09:42
new internationalization date formatter that's a two-digit year and a month that is short and the time zone now the
6:09:47
reason I'm using UTC as my time zone here which sounds really confusing is when I do these date truncations and
6:09:53
this date here it removes all my time information so if I were to format this in a time zone that's not UTC it's
6:09:59
actually going to move my date forward or backward like 3 or 4 hours and if it moves it backwards like 3 hours hours
6:10:05
that now puts me the day before and that's probably the problem that parody deals has on their website so by using
6:10:11
the UTC time zone it ensures my date won't actually move because I don't actually have a Time Value so that's why
6:10:16
I'm using time zone of UTC here to make sure my date does not move now the next two things I want to format as dates
6:10:23
instead of months so I can just use the date formatter that I've created so we have date formatter and date formatter
6:10:29
and this date formatter just gives me a date style of short rather straightforward so now my chart intervals is much more confusing but it
6:10:35
allows me to get all the data I need to actually use this form for example giving me that generate series and this also allows us to create what our date
6:10:42
is going to be so I can take our interval and I can get our date grouper and I want to group my SQL do raw of our
6:10:49
Series so SQL raw series just like that so essentially whatever this series is
6:10:54
my generate series I'm going to be taking each individual value from that series and I'm going to be putting it
6:11:00
through the exact same date grouper so converting it to a date or a month and so on then what I'm going to do I'm going to call this map with function
6:11:07
taking in my date string I'm going to pass it to my interval. dat formatter and that's going to take in a new date
6:11:13
based on my date string there we go so what this little bit of code right here does map width essentially says okay
6:11:20
after my SQL code runs how do you want me to convert this SQL to JavaScript so
6:11:25
I'm saying hey take this date which is a string and convert it into an actual date object for me from here I can
6:11:30
finish out the rest of my code by making my joins and stuff work properly for example for my group grouping I want to group based on whatever that date is and
6:11:38
that's because I'm truncating all of my different date information down to either the month or the week or so on so
6:11:44
when I do my left join I'm taking whatever my visited at right here is and I'm going to be truncating that based on
6:11:50
my date grouper so here put in that date grouper that's going to truncate down my date and here I want to get my
6:11:57
date and this comes from the function version of this so I can take in the date just like this call this function
6:12:04
which is going to call just like that there we go so essentially I'm getting that date row which is right here from
6:12:09
my database that date column and I'm comparing okay if I truncate my date that comes from here it should be equal
6:12:15
to this date here I know this is very complicated SQL code but essentially what's happening is in this first
6:12:21
subquery I'm getting all of my products that I have access to and I'm counting up all the views for each individual visit that I have actually I'm not even
6:12:27
counting them I'm just combining together my products and my visited ad and then inside of here I'm saying okay
6:12:33
give me a series of data that's going to either months or days and convert all my visited at times to either that month or
6:12:40
that day and if the day for the visited at and my series are equal add one to my
6:12:45
count and do that for every single Row in this first query so now we can see if this actually worked I can come in here
6:12:52
comment all of this information in make sure we pass our props in just like that import this particular
6:13:00
function and now we just need to add this chart in which again shouldn't be too difficult we can just copy one of
6:13:05
our existing charts this particular chart here is going to be by date and actually I
6:13:11
believe I called this by day so let me just clean that up a little bit there we go views by day this is going to have
6:13:18
date information so I'm going to have a date and that's going to be a string because it's whatever I mapped that to that's converting that to a string for
6:13:24
me and then all I need to do is instead of my country code this should be my date and everything else should just
6:13:30
work out of the box so let's see if that's working we can come in here get my chart information
6:13:36
and then I can open this up and you can see all of my views were on the 16th that's why you can see we have 12 visitors on that particular day which it
6:13:43
means that it's working and we have all these blank days which is great if we didn't generate that series of data we
6:13:48
would just have one row or one column in this chart and all these other columns wouldn't show up because they would get
6:13:53
no data but by doing that series it now gives us these blank days the last thing we have left to do is just add in all of
6:13:59
our different filtering that we want to do so we can go all the way back to our analytics page all the complex charting
6:14:04
stuff we're done with that we can just close that down the only thing we have left to do is filtering which is so much easier so the very first thing I need to
6:14:11
do is I need to wrap this entire thing inside of a div just my H1 section just like that that way I can put my filters
6:14:17
up here with it and I want to add some margin on the bottom we've been waiting for this for a long time they've been really pushed together Flex this with
6:14:23
some justifying of between to push them as far away as possible and items Baseline just like that there we go so
6:14:30
now inside of here I'm going to put a giant has permission and I only want to have these things show up if I have
6:14:36
permission to access the analytics so if I can access the analytics then go ahead and show the content inside of here
6:14:42
which is going to be a div with a class of flex and a gap of two and then we just need a bunch of drop- down menus so
6:14:49
we're going to get some drop down menus just like this I'm going to have a dropdown menu trigger just like that
6:14:57
this is going to have an as child because it's just going to render out a button and this button is going to be a
6:15:03
variant of out line inside of here interval. Lael is what we want to render
6:15:10
and we want to render that with a Chevron down so we know that it's actually something that we can click on and go down on so we'll say class name
6:15:16
size 4 margin left two close that off and we should see hopefully there we go
6:15:22
we have last seven days right there obviously it doesn't do anything else we just have the drop down trigger so let's
6:15:27
go ahead and add the drop down content drop down menu content there we go so
6:15:33
this is for changing between our different intervals so we need to Loop through all of our different intervals so we can say
6:15:39
object. entries for each one of our chart intervals I want to map through them that's going to give me a key and a
6:15:49
value and then I want to return essentially just a link but that's going to be inside of a drop-down menu
6:15:56
item there we go close that off make sure we say that this is as child and it
6:16:02
has a key which is our key now for each one of these I'm going to be creating a link make sure that's a
6:16:08
next link we're going to add in an href here which I'm going to come back to what it's going to be it's a little bit of a complicated href but otherwise
6:16:14
we're going to have our value. Lael inside of
6:16:20
here just like that make sure we close all this off there we go give that a
6:16:25
save looks like everything's working our drop down menu content I believe we made not have imported so let me make sure I
6:16:30
import that there we go and that should actually work now our href we'll just make an empty string for now so this
6:16:36
will render hopefully there we go and now you can see we have our different options obviously it's not quite looking as we expect though most likely I
6:16:42
imported my drop- down menu item from the wrong place which I did so let's clean that up and now you can see we
6:16:48
have our different intervals showing up but the links currently don't work so to make the links work I'm going to create a little bit of a helper function we'll
6:16:55
just close down these function it's going to be called create URL and this
6:17:01
create URL function is going to take an href which is a string it's going to take take some old params which are our
6:17:06
old parameters that are search prams so that's a record of the string string type and
6:17:13
then finally it's going to take some new prams which is again just a record of strings so there we go record string
6:17:20
string and this is going to return to us an href now I'm actually going to move this into our lib folder so we're going
6:17:25
to go into lib utils I'm going to paste that down into here now for this particular function it's not going to be
6:17:30
too complicated first our prams is just going to say new URL search prams and we're going to pass in all of our old
6:17:36
parameters then what we're going to do is we're going to Loop through all of our new parameters by saying object. entries with our new parameters we want
6:17:43
to Loop through each one of them so we're going to get a key and a value and
6:17:48
for each key and value all I want to do is that the value is equal to
6:17:54
undefined then I want to remove it so prams do delete that key otherwise what I want to do is say
6:18:02
prams do set the key to that specific value then finally I can return what the
6:18:07
brand new href is going to be so we say href with a question mark and p.2 string
6:18:13
now we can generate a brand new URL anywhere we need to so for example back on this particular page where I have my
6:18:19
link I can just say create URL I can pass it in the URL that I want to go to which is SL dashboardanalytics
6:18:27
and what I want to do is pass in my old search prams and I want to change the new pram for my interval to be whatever
6:18:35
this particular value is actually in our case I want the key and let's just import this function whoops create URL
6:18:43
looks like it's not automatically importing probably because I forgot to export it there we go now let's make
6:18:49
sure we import this give that a save and now hopefully if I click last 30 days you can see up here it's changed to last
6:18:55
30 days and my chart has updated if I change to last 365 you can see again it's updated my URL and the important
6:19:01
thing is you can see it's rendering out each individual month which is exactly what what I wanted back to last 7 days
6:19:06
you can see that's updating this chart as well so we have our very first drop down menu done the next one we want to work on is our product drop down and I'm
6:19:13
actually just going to bring this into its own component and make a little bit easier to work with so we'll say user ID
6:19:18
is our user ID our selected product ID is equal to our product ID and our
6:19:26
search prams is equal to our search prams close that off we'll just need to
6:19:32
create this function down here again I have the typing for my parameters already in there because that's some pretty basic stuff and I want to get my
6:19:39
products so we can say await get products get products there we go for my
6:19:45
user ID and then we can return inside of here all the different drop down stuff we need so I might as well just copy
6:19:51
this drop- down menu paste it down because it's going to be rather similar to what we had before except for here
6:19:57
I'm going to be getting my individual product and looping through my products and so on so this is going to Loop through my products and here I'm going
6:20:03
to have an individual product product just like that and then up here for my actual label this is going to be a
6:20:08
little bit of a complex thing so I want to take my products and I want to find the product with the specific ID I
6:20:14
already have so p. ID is equal to selected product ID and I want to get
6:20:20
the name from that and if the name doesn't exist I'll just have it say all products there we go then the next thing
6:20:26
I need to do down here is I first want to create a link specifically for all of my products so drop down menu item add
6:20:34
as child and inside of here is a link that goes to my analytics page using my old search prams and it sets my product
6:20:40
ID to undefined by completely removing that type now I do need to make sure that this can include undefined so that
6:20:48
I can actually remove things now if I go back to here that got rid of that error and this just removes product ID from my
6:20:54
URL now down here I want to Loop through each of my products the key is going to be my product. ID just like that for my
6:21:01
href I want to use my product ID and set it to my product. ID and down here this
6:21:08
is my product. name now if I give that a save that should hopefully clean up all our errors and now I have the ability to
6:21:14
say okay give me it only for this product or for all my products now if I create a brand new product just give it
6:21:19
a random name random URL equiv that a quick save
6:21:25
this product has absolutely nothing associated with it at all as you can see it also looks like my tab is currently
6:21:31
incorrect I need to fix that so let's do that real quick before I forget we're going to go into our page for our products we're going to go to our edit
6:21:38
page and all the way at the top where we have our tabs being defined you can see this is called country not countries so
6:21:44
I'll change that to countries and that will actually fix it now when I go to the page you can see it's on that country Tab and there we go it's on the
6:21:51
country tab that actually fixed all that okay back to analytics so now I have three products test name three has data
6:21:57
this one has no data so as you can see all these are blank no data available down there and for all products we see
6:22:02
all the data for all of them combined together together now the very last thing that we need to implement is the time zone drop down and this is
6:22:08
something that a lot of charting places don't do and I really wish they would because it's super useful to be able to choose things in your own specific time
6:22:15
zone so copy this drop down menu down this one's going to be very simple right here we're going to render out whatever
6:22:20
the time zone is there we go that's our current time zone and we don't even need to do any
6:22:25
type of array looping or anything like that we just need our drop- down menu item we don't even need a key on it
6:22:31
because we only have two different options we have UTC and we have non UTC so for the time
6:22:37
zone we have UTC just like that and inside of here we're going to print out the text UTC so that's going to be our
6:22:44
UTC option now we need to add the option for our current time zone and this will actually require us to create a brand
6:22:50
new component and that's because we need it to render on the client because otherwise it'll give us whatever our server's time zone is so we're going to
6:22:57
get the drop down menu item which is going to take in our search pams
6:23:05
there we go and now let's create this component so over into here we can just
6:23:10
go into our components create a brand new file call it time zone drop down menu item export function that exact
6:23:18
item right there this is going to be taking in our search
6:23:23
pams whoops search pams and this is going to be search
6:23:31
pams this is a record which is string or string there we go
6:23:37
and then all we need to do is just render out this drop down menu item I'm just going to copy the code because it's relatively straightforward and I'll
6:23:43
explain it we just getting our drop down menu item we're making sure we render it as a child because we want to render a
6:23:48
link inside of it we're creating a URL just like we did for the rest of them the only key difference is that we're
6:23:53
actually getting whatever the user's current time zone in right here so I'm just going to take this and say const
6:23:59
const user time zone is equal to that and then we can just place that in both sections there we go this is the user
6:24:07
local time zone so now here I can import this and we should hopefully see if all
6:24:12
this loads that I now have the option to view my data in UTC or in my current time zone which is the America Chicago
6:24:18
time zone now it currently makes absolutely no difference but I'll show you a case where it actually would make a difference we'll say npx run DB Studio
6:24:28
there we go and actually I don't need the npx I should just say npm run DB
6:24:33
Studio that'll open up my drizal studio I'm going to add a brand new piece of information into this we'll just make it
6:24:39
full screen we'll go over to our product views and I'm going to add a brand new row for this particular product ID this
6:24:46
particular country ID and for the date here I want to just do 202 24-09-2019
6:25:04
now what I can do is close out of this and go back to my application here give page a refresh and you'll see that we
6:25:10
should hopefully have some visits on that particular day let's go to UTC make sure it's all products give
6:25:16
that a quick refresh it's actually showing up on the 16th even if we're in our time zone here it's still showing up
6:25:21
on the 16th and I'm almost 100% sure the reason for that is because of our caching obviously manually changing our
6:25:27
database doesn't reset our cach so to easily reset our cach I'm just going to refresh this page that'll add a new product View and that should fix our
6:25:33
cash in immediate you can see if I switch over to UTC I have a date on the 15th but my time zone is before UTC so
6:25:40
when I switch to my time zone you can see that that date that was at midnight UTC actually swaps to the day before so
6:25:46
this is why it's really important to be able to show people's data in UTC or their current time zone cuz for me this
6:25:52
was something that happened on the 14th while if I look at it in UTC it looks like it happened on the 15th now that
Fixing Mistakes
6:25:57
pretty much is everything we need to cover but I actually realized I forgot to do something way back all the way on our dashboard page I never added any
6:26:04
additional for our most popular to add like a little Banner in the corner which is something that we should have so what we can do is we can actually go back to
6:26:11
that particular page in our marketing page that's going to be our normal page and what I want to do is all the way at
6:26:17
the very bottom inside of my pricing card I have the ability to see which one is most popular you can see is most
6:26:22
popular and I want to add quite a bit of additional flare to this if it is the most popular one so in particular on my
6:26:28
card I want to add quite a bit of additional class names so here I'm going to have CN to do all the class name
6:26:33
stuff and and I want to have it be relative I want to have a shadow of none I want to have it be rounded
6:26:40
3XL overflow hidden and then what I can do is if it is the most popular I can
6:26:47
add additional classes so I can say that my border should be the accent border and I'll put a border of two around it
6:26:54
otherwise I'll have a border of none there we go so now my
6:27:00
most popular one you can see has this nice big blue border around it which looks good already ready the next thing
6:27:05
I want to do is directly inside my card header if it is the most popular then what I want to do is I want to render
6:27:11
out a little Banner that's going to go in the top left of the or the top right of the card so we'll say class name
6:27:16
background is going to be accent text is accent foreground we're going to make sure that it's positioned absolutely
6:27:22
padding on the top and bottom is going to be one padding on left and right is going to be quite large at 10 we're going to position negative right in the
6:27:29
8 top is going to be 24 and we're going to rotate this 45° and I'm also going to
6:27:35
set the origin to be in the top right and this is just going to say most popular and what that's going to do is
6:27:40
add this little Banner most popular across the very top right corner of this particular card another thing I realized
6:27:46
I completely forgot to add which would break your application when you deploy it to production is if we go all the way into our API open up that API for our
6:27:53
products remember how I told you that this request object is going to have information for our actual user this
6:27:59
request. Geo in our get country code if I open this up this request. Geo that only is the case on versell if you have
6:28:06
your runtime set to Edge otherwise that will not work so make sure you have a runtime set to Edge another thing I
6:28:11
didn't really do is if we go back to our dashboard here and we look at our main dashboard you can see we only have the
6:28:17
product section we don't have anything for analytics we should probably add that in as well so let's go to our dashboard our main page and let's add in
6:28:24
a section for analytics it's going to look pretty much identical to this H2 section up here so I'm going to copy that over it says analytics it has that
6:28:31
arrow to the right with all the same Styles and then I'm obviously not going to show anything unless the person has permission to access the analytics and
6:28:38
if they do we're going to show them this analytics chart now this analytics chart is just the exact same as our day chart
6:28:44
so we're going to get all of our day chart information let me make sure this a little bit bigger so it's easier to see so you can see get views by day
6:28:51
chart data we're passing in our user ID and our interval and we also need to pass it in our time zone which in our
6:28:57
case is going to be UTC let's get our chart interval because this is going to show for the last 30 days because it
6:29:02
kind of shows them the last month which is good indicator of how their application is doing and then as you can
6:29:07
see that this card is literally exactly the same as the card we had before so all of this is pretty much the same as
6:29:13
what we've rendered before but now you can see we've rendered out all of our products and if I zoom this out a little bit more you can see we now also have
6:29:19
our analytics for the last 30 days if I click on this it brings me to my analytics page another minor thing I realized I forgot to do is in our
6:29:25
product customization form if we scroll all the way down for our location message actually that was all the way at
6:29:31
the top I went too far we look inside of here here I never actually put the error message in here so let's make sure we
6:29:37
have that form message showing up and with that final minor change that is absolutely everything we need for this
6:29:42
full application to be completely built and honestly this is a massive application if you put this on your portfolio employers are going to love it
6:29:49
and even if you don't it's a project that you can build and sell and actually make money from and if you want you can
6:29:54
view all the source code in the description down below again a huge thank you to Clerk and neon for
6:29:59
sponsoring this video because of them I'm able to actually create these massive projects entire for free for you
6:30:05
I wouldn't be able to do that without their support So if you liked Clerk or neon from this video I highly recommend checking it out they'll be linked down
6:30:10
in the description for you with that said thank you very much for watching and have a good day