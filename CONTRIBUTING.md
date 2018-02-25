# Project Contribution Guide

 - [Setting Up A Development Environment](#devenv)
 - [Development Workflow](#worflow)
 - [Coding Rules](#rules)
 - [Commit Message Guidelines](#commit)

# <a name="devenv"></a> Setting Up A Development Environment
**TODO**

# <a name="workflow"></a> Development Workflow
**TODO**

#### After your merge request is merged
**TODO** 

After your merge request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitLab either through the GitLab web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```

## <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs (unit-tests).
* All public API methods **must be documented**.
* We follow the style guide configured in the ESLint configuration file.
  * Wrap lines at 80 characters.
  * Two spaces per indentation level.
  * Use [] and {} instead of Array() and Object().
  * Prefer ES6 features where applicable.

## <a name="commit"></a> Commit Message Guidelines
Git commit messages should be formatted very precisely. This leads to **more
readable messages** that are easy to follow when looking through the **project history**.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**. 
The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory. All lines should be wraped at 80 characters to allow
the message to be easier to read on GitLab as well as in various git tools.

The **body** is used to explain more complicated situations that cannot fit in the header.

The **footer** is used to contain a closing reference to an issue, if applicable (e.g. "Closes #24."),
or external references to resources used.

### Type
Must be one of the following:

* **build**: Changes that affect the build system or external dependencies
* **ci**: Changes to our CI configuration files and scripts
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

### Scope
Must be one of the following:

* **frontend**
* **backend**
* **devops**
* **db**

If the change is project-wide, scope may be omitted.

### Subject
The subject contains a succinct description of the change:

* Use the imperative, present tense: "change" not "changed" nor "changes"
* Don't capitalize the first letter
* No punctuation at the end

### Body
The body contains the motivation for the change, contrasts it with previous behavior,
and further explains the summary line. Complex behavior and changes should be noted
to prevent future confusion.

### Footer
The footer contains references to closed issues or external resources.

### Examples
```
docs(frontend): document added button component
```
```
fix(backend): update dependencies to latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```