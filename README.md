 # Notes

 This is a create-react-app project taken from *[Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/)*, but rewritten in Typescript. There are also some CSS differences and the file names or the project's structure is not the same.  
 The original project by Yihua Zhang can be found split in lessons  [on his GitHub's account](https://github.com/ZhangMYihua).

## Redux

It's based on 3 principles:

* single source of truth: we have one single big object which describes the *important* state of our whole app (by important I mean that some component may have its internal state since it's only specific for a little part of our app).
* state is read only: it prevents unexpected errors through immutability.
* changes are made only by pure functions (predictable output by same input)

It uses the **flux** pattern:

[Flux](https://facebook.github.io/flux/docs/overview) is the application architecture that Facebook uses for building client-side web applications. It complements React’s composable view components by utilizing a unidirectional data flow.
* **Actions** are simple objects with a type property and some data. For example, an action could be {“type”: “IncreaseCount”, “local_data”: {“delta”: 1}}
* **Stores** contain the application’s state and logic. The best abstraction is to think of stores as managing a particular domain of the application. They aren’t the same as models in MVC since models usually try to model single objects, while stores in Flux can store anything.
* The **dispatcher** processes actions (for example, user interactions) and invokes callbacks that the stores have registered with it. The dispatcher isn’t the same as controllers in the MVC pattern — usually the dispatcher does not have much logic inside it and you can reuse the same dispatcher across projects
* **Views** are controller-views, also very common in most GUI MVC patterns. They listen for changes from the stores and re-render themselves appropriately. Views can also add new actions to the dispatcher, for example, on user interactions. The views are usually coded in React, but it’s not necessary to use React with Flux

<img src="https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-explained-1300w.png">

Docs:

* [Usage with Typescript](https://redux.js.org/recipes/usage-with-typescript)
* [Using hooks in React Redux](https://react-redux.js.org/api/hooks)

## Things to explore :checkered_flag:

- [ ] `React.lazy`
- [ ] `import { Suspense } from 'react'`
- [ ] `useMemo`