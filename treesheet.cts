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

@html conference-attendees //apps.cloudstitch.io/visualizations/conference-attendees/index.html;
@css relative(scripts.css);
@js relative(styles.js);
@js relative(d3.min.js);
@js relative(map.js);
@gsheet shadedUsaMapDatasource http://cloudstitch.io/visualizations/conference-attendees/datasource/shadedUsaMapDatasource;

body|*[widget="visualizations/shaded-usa-map"] {"after": "attendeesWidget_Init"} :graft conference-attendees|#shaded-usa-map;

