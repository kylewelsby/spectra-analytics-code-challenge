Thanks for your interest in this contractor position with Spectra Analytics and the University of Manchester. 

To start the interview process, we would like you to complete this technical task. 

It is based on a real feature we have released and uses the same frontend framework ([Vue.js](https://vuejs.org)) that we use. 

The task is to create a simplified page for instructional videos on how to use our web app, PATCHS. 

There is a mockup ([attached](./__DESIGNS__/video_page_mockup.pdf)) showing the layout, but the styling is up to you. 

The two main PATCHS branding colours are ![#7e4c97](https://via.placeholder.com/15/7e4c97/000000?text=+) `#7e4c97` and ![#3eb6ff](https://via.placeholder.com/15/3eb6ff/000000?text=+) `#3eb6ff`.

Please see below for more details and acceptance criteria.

## Instructions:

* Video page should have a side menu where the video can be selected, and then the video plus instructions will be seen on the rest of the page (see attached mockup for design). The titles of each video are given in the mockup, and the text can just be a placeholder.
* URL for the first video - https://patchs-public.s3.eu-west-2.amazonaws.com/instruction-videos/how_to_1_about_this_guide.mp4
* URL for second video - https://patchs-public.s3.eu-west-2.amazonaws.com/instruction-videos/how_to_2_what_is_patchs.mp4
* For the rest of the videos, just reuse one of the above URLs as a placeholder

## BONUS TASK:

as a bonus, add page routing so that each video can be accessed directly by going to the URL. For example, https://[some-url]?video=1 will take you to the first video.

## Acceptance criteria:

When I load the page
Then

* there is a (narrower) left hand video selection menu that shows a list of all available videos
* there is a right hand pane that shows:
* video
* instructions

([see attached power point for layout](./__DESIGNS__/video_page_mockup.pdf))

```gherkin
Given I visit the page
When the page is loaded
Then I should see a sidebar
And the sidebar should contain a list of available videos
And I should see a main section
And the main section contains a video
And the main section contains instructions
```

---

When I click on a video link from the left hand contents pane

Then

* the corresponding video and descriptive text are displayed in the right hand pane

```gherkin
Given I visit the page
And the sidebar is visiable
When I click on a video link
Then I the main section should update with the video
And the main section contains instructions
```
