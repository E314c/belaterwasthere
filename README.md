# Belaterwashere

This repo represents some work done to understand an attack on a wordpress site.

## Current post mortem:

### Initial attack vector
- publicly disclosed vulnerability in the `Rich Reviews` plugin used on the word press site
  - Disclosure at Wordfence here: [https://www.wordfence.com/blog/2019/09/rich-reviews-plugin-vulnerability-exploited-in-the-wild/](https://www.wordfence.com/blog/2019/09/rich-reviews-plugin-vulnerability-exploited-in-the-wild/)
  - this allow the attacker to modify options to inject a script onto the page
  - the script then downloaded an additional payload from `https://capital.belaterbewasthere.com/len.php`
  - This script would detect whether the user was logged in or not and then perform further action
  - __Logged in__
    - Full analysis not complete, but the script appears to be an attempt of CSRF, using the user's credentials in 3 API calls at the end of the script
  - __Not Logged in__
    - User page is stopped and redirected via `https://capital.belaterbewasthere.com/len.php?s=678&_id=129843478&utm=gfhklew45`
    - User navigated to a domain which pretends to be a human verification and askes the user to accept notifications
      - Two domains have been seen for this:
        - `https://redrelaxfollow.com`
        - `https://greenrelaxfollow.com`
      - Unsure as to the intended "attack" at this point. Possibly just advertisment injection at a later date.

## Additional notes
- Multiple other sites have been hit with the same attack, as seen by a [quick google search](https://www.google.com/search?q=belaterbewasthere&oq=belaterbewasthere)
  - or see screenshot in [Assets/OtherAffectedPages.png](./Assets/OtherAffectedPages.png)
