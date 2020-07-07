1. What problem does the context API help solve?
<!-- This prevents prop drilling, and can put data on a context object instead of props -->
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
<!-- Actions are instances we can create for a reducer to activate with a dispach such on click events.
Reducers essentially store actions in a repository for dispach to access.
Store takes in a reducer or multiple reducers and is a repository for reducers to be called. -->
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
<!-- Application state is a global state where for examples many users could use at the same time. Component state is specific to that components state and can't be accessed outside of that state, unless otherwise passed. -->
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
<!-- Redux thunk lets you create action creators, which allow you to create functions that you can call out of your actions. -->
1. What is your favorite state management system you've learned and this sprint? Please explain why!
<!-- I enjoy Redux and context API, specifically because it makes prop passing easier and state management more organized. I can see how this might be better for larger scale projects. -->