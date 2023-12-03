# Donation Campaign

Welcome to the Donation Campaign project! This application allows users to make donations, view donated items, check donation statistics, and search for donation items by category. Below, you'll find an overview of the project's features, key functionalities, and usage examples.

## Live Link

🚀 **[Click here for the live link](https://donationcampaign.surge.sh/)**

## Features

- 💸 **Donation**: Users can donate to various projects or causes by adding items to their donations list.

- 📜 **View Donated Items**: Users can see a list of items they have donated.

- 💰 **Statistics**: The application provides statistics on the total donation amount and the total amount donated by the user.

- 🔍 **Search by Category**: Users can search for donation items by entering a category name, and the application will filter and display matching items in real-time.

- 💾 **Local Storage**: Donation data is saved locally, allowing users to access their donation history even after closing the application.

## State Management

### States

- **donated**: This state variable holds an array of items that the user has donated. It is initialized by fetching data from local storage when the component mounts. Users can add or remove items from this list.

- **filteredData**: This state variable is used to filter and display donation items based on user-entered category names. It can be updated to show specific sets of donated items.

- **data**: This state variable stores the initial data loaded from the server or a data source. It serves as a reference for available donation items.

### Functions

- `handleAddToDonate(item)`: This function adds a selected item to the user's list of donations. It checks for duplicates and updates the `donated` state accordingly. Successful donations trigger a success message, while duplicate donations show an error message.

- `handleRemoveFromDonate(id)`: Users can remove items from their donation list using this function. It updates the `donated` state, removes the item, and displays a success message upon removal.

- `updateFilteredData(criteria)`: This function is used to update the `filteredData` state based on specific criteria or filters applied by the user.

- `handleSearch()`: The search function filters donation items based on partial category names entered by the user in the search input. It updates the `filteredData` state with matching items.

## Use of useEffect

The `useEffect` hook is used to manage the application's initial data loading and local storage interaction. It ensures that the `donated` state is populated with saved data from local storage.

<!-- bg-slate-200 bg-blend-screen -->
