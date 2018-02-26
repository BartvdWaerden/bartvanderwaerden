---
title:  "Commit to writing good commit messages"
date:   "2017-01-06"
tag: "GIT"
type: "post"
---

Nowadays almost every developer uses or at least knows about Git. Git is a version control system and keeps track of changes made during development.

Git allows us to work on multiple local branches independent of each other. You commit to branch `‘feature 1’` and your colleague is committing to branch `‘feature 2’` When your work is done you merge branches `‘feature 1’` and `‘feature 2’` to branch `‘develop’` . Ultimately this leeds to better collaboration and a better experience during development.

But we can make this experience even more awesome by setting some conventions, a commit guideline. There are a couple of goals when setting up theses (commit) conventions:

* Creating consistent git commit messages across the project and the team
* Speeding up the reviewing process
* Providing better information when browsing the history

Even though this might seem like a hard subject to grasp. A lot of awesome companies and people already thought about this and made some killer conventions themselves. The only thing for us is to pick a style, alter it too our needs and hang on to it. So what are we waiting for…let’s dive in!

## The architecture of a commit message

When looking at a clear and good commit message, each message should contain the following structure: a header, a body and finally a footer.

```html
<header></header>
<BLANKLINE>
<body></body>
<BLANKLINE>
<footer></footer>
```

### Header

Since this is the first thing people read when reviewing your commit this the most important part of your commit commit message. So make it count!

Setting up some kind of structure for your header might be a good idea. Your goal should be to provide as much information as possible within 50 characters our less.

Next, let’s add `<type>` and `<subject>` to our `<header>`. The skeleton of our commit message header should look like this:

```javascript
<header> <type> <subject> </header>
```

Your next question might be what to put in a `<type>` and what to write in a `<subject>`? Well, follow along!

#### Type

Because space is valuable within our header we use abbreviations to indicate the type of commit we’re doing. The following list contains a couple of types you could use too indicate the type commit and what the stand for.

* **ftr**: Indicates a new feature
* **fix**: Indicates a bug fix
* **doc**: Indicates a change within the documentation
* **ref**: Indicates a code refactoring that neither fixes a bug nor adds a feature
* **rev**: Indicates the commit reverts a previous commit and should contain the reverted commit hash within the subject.
* **wip**: Indicates a work in progress

By only placing 3 characters in front of our subject alone, we made our header so much more valuable and informative. An example of our work so far could be:

```html
ftr: <subject>
```

#### Subject

After the `<type>` our `<header>` should contain a `<subject>`. Within our subject we summarise what this commit message does. When writing a good `<subject>` the following list contains some good rules of thumb.
Use the imperative, present tense: “add” not “added” nor “ads”
Capitalise first letter
No period at the end of tje subject line. Space is precious when you’re trying to keep this line 50 characters.
With our previous example in mind and our new knowledge we can complete our `<header>` wich should look something like this:

```html
ftr: Add the new footer design.
```

### Body

Next up is our body of the commit messag. Just as in the subject, use the imperative, present tense: “change” not “changed” nor “changes”. The body should include a comprehensive motivation for the change. But keep in mind, any line within the commit message cannot be longer then 80 characters! This allows the message to be easier to read.

```
ftr: Add the new footer design

Sustainable aesthetic lyft butcher wolf pop-up before they sold out,
disrupt shoreditch.

• bullet 1
• bullet 2
```

### Footer (optional)

And last but not least comes the footer of our commit message. The footer holds further meta data, such as breaking changes, issue ids, and pull/merge request numbers.

```html
ftr: Add the new footer design

Sustainable aesthetic lyft butcher wolf pop-up before they sold
out, disrupt shoreditch.

• bullet 1
• bullet 2

Closes #312, #245
```

## Final word

Maybe this looks like a lot of work in the beginning but I'm sure you can see the benefits of using this or a similar convention for your commit messages. Apart from creating a more consistent style across your projects and better reviewing experience there are many more positive side-effects. Generating a changelog with one simple script for instance. Although these positive side-effects are beyond the scope of this article I'm sure you can come up with some more.
