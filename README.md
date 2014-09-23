pigion-web
==========

Web management dashboard for [Pigion](http://github.com/eliotfowler/pigion-core)

Contribution
------------

In order to contribute you will have to clone this project using

```
git clone git@github.com:eliotfowler/pigion-web.git
```

and then you will have to set up your development environment.

Setting up your development environment 
---------------------------------------

This is an angular project that leverages modern technologies to make development fun.

####Ruby

First, you will need to install ruby and compass. If you are on a mac, you should already have ruby installed. To make sure of this type the following in Terminal:

```
ruby -v
```

and make sure something other than `ruby: command not found` comes back.

####Compass

Next install compass using:

```
gem install compass
```
Open a new terminal window with cmd + n and type `compass -v` and verify that the installation worked by reading the output as something other than `compass: command not found`.

####Node/npm

Next you will want to install node and npm. The best way to do that though, is by installing homebrew first (homebrew is awesome).

#####Homebrew

To install homebrew type the following in terminal:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

and answer all the questions (honestly).

Once that is installed, you can install node/npm with:

```
brew install node
```

This might take a few minutes, but once it's done, you should be good to go.

####Our stack

Now you're ready to install tools for this project alone (the previous stuff can be used on all future projects too)

Install with:

```
npm install --global yo generator-angular
```

If you get errors, it's probably because it wants you to use sudo. I wouldn't though. To fix those errors, you will want to run the following:

```
sudo chown -R `whoami` ~/.npm
```

that will require you to type in your (computer) password and then you should be able to run the previous command again and it should work.

Now lets make sure that bower and grunt are installed:

#####Bower

```
bower -v
```
#####Grunt

```
grunt -v
```

If those look good (see previous pattern for checking if they do), we should be ready for the final step.

Make sure you are in the project directory (pigion-web), and run the following:

```
npm install && bower install
```

Authors
-------

This project is being actively developed and designed by Eliot Fowler and Andrew Acree.