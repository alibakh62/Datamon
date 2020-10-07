# Datamon
Datamon is a platform that enables ordinary people make money from their own data.

# ToDos

- [] Add `RefreshControl` for project cards page. When the user drags the top of the scrollable content area downward, the scroll view reveals the refresh control, begins animating its progress indicator, and notifies your app. You use that notification to update your content and dismiss the refresh control. This is to update the list of projects that the user could join. So, when `RefreshControl` is triggered, we make a call to the firestore and get the latest project cards data.

- [] Add **estimated earning potential** to each project card. Logic has to come from how much budget the user sets for the project.

- [] Add `project_name` field to `user_projects` collection. Make sure the field is also added properly in the web-app side.

- [] In `ProjectCard` component, figure out how to handle long descriptions. Right now, when the description is too long, it'll overlap with the buttons and mess up their style. I manually set the `numberOfLines` to 20, but there should be a better way.

- [] Custom fonts are not being loaded properly. Sometimes they load and sometimes they don't. Currently, I'm using expo guideline to use custom fonts, but there should be a better more stable way.

- [] In `Login`, we have to check if the record already exists before writing it to firestore.

# Notes:

- For adding custom fonts (e.g. Nunito), refer to [here](https://github.com/expo/google-fonts/tree/master/font-packages/nunito#readme)
