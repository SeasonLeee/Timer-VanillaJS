# Minimalist Timer

A timer app inspired by Microsoft's.

I use Windows 10's Alarm and Clock application a lot, 
but it always bugs me when I want to using the same thing in other OS.

Then it hit me, why not build one with the knowledge I know of, and make it web base, 
which means I can open a timer as long as I have browser installed!

That'll be awesome, right? Well, to me, at least😆

So, I start making it.

And I challenge myself to not use the help from framework first.

And boy, did that decision helps me a lot!

With the help of framework, I never realize how much work I don't need to do!

So this leads to my another adventure, to dive deeper into the framework I have used!😎

*update: 28-8-2019:*

- [x] Finishing the onConfirm(), confirm button's funcion

and from now on, I moved future to-do to issue tab 


## lessons learned during the first version: 
   (I recorded these as quesions in the js as comments, now I filled the gap)
1. Only object can have reference!
   
   I know this is like a JS 101, but I actually made this mistakes when I tried to create seperate variable to store input element's value as I want to modify it more flexibly.

   Well, that didn't work. If you are an experienced JS dev, you must be lol-ing right now, right?

   So, what I thought was the variable store a reference to the object's property, because it's object's property and I think, well, object's stuff, it must be able to reference, too! 

   BAM! WRONG!

   Only, object itself can be referenced. Unless it's property is also an object, when you try to pass it to a variable, you are passing the value NOT reference.

   Well... 

2. Even if the input element I explicitly set its type as number, whatever I input will become string....

   ...well...


## lessons learned from this update...

1. Since I simply want user to keep adding time after they hit yes on the 'yes' button,
   all I need to do is close the modal so that user can keep on editing time...
2. So the onConfirm here is just basically a close modal thing...
3. But I encounter a peculiar thing that EventListener keep registering if I do not remove it explicitly.
   
   The issue behave in this way:
   
   After the 'yes' button was hit, the modal disappear and we can continue to edit the time.
   But after the time editing is done. And try to start the timer after the confirmation modal show up.
   The click event can't trigger the close modal method! 
   
   So, console.log(), here we go! But I only got that everytime the click event is fired, it's magically triggered twice!
   
   That's kind of freaky... and a million times of google can't save me. 
   
   Just when I want to give up... @guojianglin came to rescue me from that hopeless doom.
   
   And educate me with the fact that event can "accumulate".
   
   And he told me he learned that from that professional javascript book, which just added to my book list when I knew that.
   
   But I still don't know the underlying reason why this kind of thing can happen...
   
   And I realized I still have a lot to know about that DOM thing...
   
   Well... never mind, just read the read and build the build😁😆
   
   Oh, I think I should move what should be done next into that issue thing... wow, github is fun😝
   
Words to remember...

*To live is to suffer, to survive is to find some meaning in the suffering. -- Friedrich Nietzsche*
