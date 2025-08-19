# Kanban Board React

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Docker Deployment</a></li>
      </ul>
    </li>
    <li>
      <a href="#implementation-details">Implementation Details</a>
      <ul>
      </ul>
    </li>
  </ol>
</details>

## About The Project

![](screenshot.png)

__Kanban Board React__ is a React+Vite application that lets users create tasks, organize them into four lanes (To Do, In Progress, Review, Completed), and move tasks forward or backward between lanes. It uses React state with localStorage persistence, TailwindCSS for styling, and is built from modular components (`Task`, `TaskForm`, `TaskList`, `Lane`) for reusability.

### Key Features

- __Task Management__: Add new tasks via a task form component. A task has the following attributes: _title_, _category_, _priority_, and _description_. Each task card is styled with Tailwind (rounded corners, dynamic styling, centered layout).
- __Kanban Lanes__: There are four workflow stages: _To Do_, _In Progress_, _Review_, and _Completed_. Tasks are displayed in their corresponding lane.
- __Task Movement__: Each task has forward and backward buttons to move between lanes. Movement is restricted (e.g. can’t move backward from _To Do_ or forward from _Completed_).

### Built With

* [![JavaScript][JavaScript]][JavaScript-url]
* [![Tailwind][Tailwind]][Tailwind-url]
* [![React][React]][React-url]
* [![Vite][Vite]][Vite-url]
* [![Docker][Docker]][Docker-url]

## Docker Deployment

```bash
make docker-build
make docker-run
```

When deployed locally, open browser at `localhost:8080`. 

<!-- MARKDOWN LINKS & IMAGES -->

[JavaScript]: https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[React]: https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge
[React-url]: https://react.dev/
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white
[Vite-url]: https://vite.dev/
[Docker]: https://img.shields.io/badge/docker-257bd6?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC
[Tailwind-url]: https://tailwindcss.com/

