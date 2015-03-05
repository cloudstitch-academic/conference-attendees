/*
 * Treesheet
 * ---------
 * 
 * This file enables your Cloudstitch app to be injected into 
 * a page as a widget. To do so, simply include cloudstitch.js 
 * in the web page HEAD: 
 * 
 *   <script src="http://cloudstitch.io/release/cloudstitch.js"></script>
 * 
 * And then invoke the widget like this:
 *
 *   <div widget="academic/conference-attendees"></div>
 *
 */

@html conference-attendees //apps.cloudstitch.io/academic/conference-attendees/index.html;
@css relative(styles.css);
@js relative(scripts.js);
@gsheet sheet http://cloudstitch.io/academic/conference-attendees/datasource/sheet;

body|*[widget="academic/conference-attendees"] {"after": "attendeesWidget_Init"} :graft conference-attendees|#conference-attendees-widget;

