# dmgnews

Small React Native app to display list of news. Grid and List views are supported


### Libraries Used
* react-query: for state management and API fetching. This can be eeffectively scaled to manage and manipulate API or local states using queries and mutations, rather than using traditional redux or actions based approach
* async-storage: for persisting cache on local storage

### Note
* useInfinite query was causing some issues when used in conjuction with persist library, hence not used for pagination. 
Instead a custom logic has been put into place by manipulating query keys. 
* Ideally we should use refetch to fetch data or use useInfiniteQuery, and avoid query re-rendering. 
Took this decision to manipulate keys as even in offline mode the cached data against this keys would be given to view and it was very late to switch to a different state management library. 
