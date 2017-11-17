Source for [orig-in.github.io](http://orig-in.github.io) website.

See [master](https://github.com/orig-in/orig-in.github.io/tree/master) branch.

[![Build Status](https://travis-ci.org/orig-in/orig-in.github.io.svg?branch=src)](https://travis-ci.org/orig-in/orig-in.github.io)


mvn jbake:help -Ddetail
mvn jbake:inline


mvn clean site

export github_oauth2Token_orig_in=<token here>
mvn site-deploy