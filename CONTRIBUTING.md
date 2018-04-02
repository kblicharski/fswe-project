# Project Contribution Guide

 - [Setting Up A Development Environment](#devenv)
 - [Running the Application](#running)
 - [Coding Rules](#rules)
 - [Commit Message Guidelines](#commit)

# <a name="devenv"></a> Setting Up A Development Environment
* Install nvm using curl
    ```shell
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
    ```

* Install node using nvm
     ```shell
    nvm install node
    ```
    
* Install the necessary npm dependencies globally
    ```shell
    npm install -g npm @angular/cli typescript npm-check-updates
    ```

# <a name="running"></a> Running the Application
* Ensure you're up to date
    ```shell
    git pull origin master
    ```

* Change directories into the application folder and install dependencies
    ```shell
    cd voting-app
    npm install
    ```

* Run the application
    ```shell
    ng serve --open
    ```

# <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs (unit-tests).
* All public API methods **must be documented**.

## <a name="commit"></a> Commit Message Guidelines
Git commit messages should be formatted very precisely. This leads to **more
readable messages** that are easy to follow when looking through the **project history**.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**. 
The header has a special format that includes a **type** and a **subject**:

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
Note: Can be omitted if the change doesn't fit discretely into any of these.

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
docs: document added button component
```
```
fix: update dependencies to latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```
