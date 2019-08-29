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

But this thing is not done yet, these are the things need to finish in the future,

Todo:
- [ ] Notify user when the timer is completed.
- [ ] Rewite this whole thing in Angular and VueJS

*update: 28-8-2019:*

- [x] Finishing the onConfirm(), confirm button's funcion

## lesson learned from this update...

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
