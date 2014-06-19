###Usage:
	
First you should build the markup as follows, the 'data-target' field specifies the  corresponding relationship between the switch and the tab content

```html
<div class="tab-container">
	<div class="tabs">
		<a class="tab active" data-target="home">Home</a>
		<a class="tab" data-target="profile">Profile</a>
		<a class="tab" data-target="messages">Messages</a>
	</div>
	<div class="tab-panes">
		<div class="tab-pane active" data-content="home">home</div>
		<div class="tab-pane"  data-content="profile">profile</div>
		<div class="tab-pane"  data-content="messages">message</div>
	</div>
</div>
```

And with the styles that hides the non-active tab pane

```css
.tab-panes .tab-pane{
	display: none
}
.tab-panes .active{
	display: block
}
```

Finally makes the markup tabbable:

	var tabs = require('tabs');

	tabs('.tab-container');

###Examples:
	
See test/runner.html