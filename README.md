# SDF-TypeScript - Starter Project

## Overview

This project is designed to demonstrate the integration of SuiteScript 2.1 and SDF with TypeScript, aiming to streamline and optimize the customization process for NetSuite accounts.

For additional insights and guidance, this repository complements the following technical blogs:
- [Getting Started with SuiteScript 2.1, TypeScript, and the SuiteCloud Development Framework (SDF)](https://blogs.oracle.com/developers/post/getting-started-with-suitescript-21-typescript-and-the-suitecloud-development-framework-sdf)
- [5 Practical SuiteScript 2.1 User Event Scripts with TypeScript](https://blogs.oracle.com/developers/post/5-practical-suitescript-21-user-event-scripts-with-typescript)

Key Technologies:
- **SDF**: Facilitates a structured framework for managing the software development lifecycle.
- **SuiteScript 2.1**: Provides enhanced customization capabilities within the SuiteCloud Platform.
- **TypeScript**: Improves code quality and simplifies maintenance.
- **ECMAScript**: Offers modern JavaScript features for more efficient, modular coding.

> **Disclaimer**: The NetSuite team does not officially support TypeScript or any third-party libraries mentioned or used in this repository.

---

# Getting Started

## Pre-requisites (Environment & SDF Setup)

### 1. Install Visual Studio Code (IDE)

- [Download and install Visual Studio Code](https://code.visualstudio.com/)

### 2. Install SuiteCloud Extension for VS Code

1. **Open VS Code**: Start the Visual Studio Code application
2. **Navigate to Extensions**: Click on the Extensions icon in the Activity Bar on the side of the window
3. **Search for SuiteCloud**: Type "SuiteCloud Development Framework" in the search bar
4. **Install the Extension**: Click the "Install" button

### 3. Set Up NetSuite Account Credentials

Follow these steps to configure your NetSuite account credentials:

1. **Open Extension Settings**: Click on the gear icon in the bottom-left corner of the VS Code window.
2. **Find SuiteCloud Section**: Scroll through the settings to locate the "SuiteCloud" section.
3. **Enter Credentials**: Populate the appropriate fields with your NetSuite account credentials.

### 4. Setup SDF Development Environment

Ensure that your SDF and NetSuite account are set up. If your environment is already setup, you can skip this step. If not, watch this [three-part video series](https://videohub.oracle.com/media/Setting+up+NetSuite+to+Use+SDF/1_67268uoj) to get your account set up. Alternatively, you can follow these step-by-step guides published on Oracle Help Center:

1. [Enabling SuiteCloud Development Framework](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4724921034.html)
2. [Assigning Developer Role](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4724921075.html?)
3. [SuiteCloud Account Preferences](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/bridgehead_4730893710.html)
4. [IDE setup based on Visual Studio Code](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/subsect_1539287603.html)
5. [SDF CLI tools installation](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_1558708800.html#SuiteCloud-CLI-for-Node.js-Guide)

---

## Quick Start

### Step 1: Clone the Repository
Clone the project using the following command in your terminal:
```bash
git clone git@github.com:makassem/sdf-typescript.git
```

### Step 2: Navigate to the Project Directory
Change your current directory to the newly cloned project:
```bash
cd sdf-typescript
```

### Step 3: Install Dependencies
Install the required dependencies using npm:
```bash
npm install
```

### Step 4: Open Current Directory in VS Code
Now, from terminal, you can open the current directory in VS Code using the following script:
```bash
code .
```
If that command doesn't work, it likely means that VS Code is not in your environment variable $PATH. Follow these instructions to get it installed:

1. Open VS Code
2. Access the Command Palette by pressing `⌘⇧P` (`Ctrl+Shift+P` on Windows).
3. In the Command Palette, type `shell command` to search for shell commands.
4. Type and select `Install 'code' command in PATH`.

After executing the command, restart the terminal for the new $PATH value to take effect. You'll be able to simply type 'code .' in any folder to start editing files in that folder. The "." means "current directory".

### Step 5: Run the Project
Transpile your TypeScript code:
```bash
tsc
```

### Step 6: Deploy Project
1. Open the Command Palette in Visual Studio Code by pressing `Ctrl+Shift+P` (Windows/Linux) or `⌘⇧P` (Mac).
2. Type `SuiteCloud: Deploy Project` and select it from the dropdown list that appears.

---

## Important Files & Notes

### `package.json`

This file serves as the project's manifest, outlining its name, version, and dependencies. Here, you will find `typescript` and `netsuite-types` listed under `devDependencies`, which are essential for development tasks like code formatting, testing, and building.

### `tsconfig.json`

This configuration file provides guidance to the TypeScript compiler on how to transpile the TypeScript code into JavaScript. It outlines various compiler options such as the module system, target language level, and output directory. The file also includes path mappings for NetSuite-specific type definitions.

### `TypeScripts` Folder

Located under the `src` directory, this is the designated folder for your SuiteScript 2.1 TypeScript files. These TypeScript files serve as the source files that will be transpiled into JavaScript code.

### Compiled JavaScript in `SuiteScripts` Folder

This directory serves as the output location for the transpiled JavaScript files, as specified in `tsconfig.json`. Once the TypeScript files from the `TypeScripts` folder are transpiled, the resulting JavaScript files are stored here, ready for deployment to NetSuite's FileCabinet.

By understanding the roles of each of these key components, you can better navigate the project's structure and streamline your development process.

---

## Useful SDF Commands

- `SuiteCloud: Deploy Project`: Deploys local project to NetSuite account.
- `SuiteCloud: Update Object from Account`: Fetches custom objects.
- `SuiteCloud: Upload File`: Uploads the currently opened file.

More details can be found [here](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_158400948906.html).

## Security

Please consult the [security guide](https://github.com/oracle-samples/netsuite-suitecloud-samples/blob/main/SECURITY.md) for our responsible security vulnerability disclosure process.

## License

Copyright (c) 2024 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.

Released under the Universal Permissive License v1.0 as shown at [https://oss.oracle.com/licenses/upl/](https://oss.oracle.com/licenses/upl/).

## Disclaimer

This project is author opinionated and is not officially supported by Oracle + NetSuite Inc. The sample code included herein is provided on an "as is" basis, without warranty of any kind, to the fullest extent permitted by law. Oracle + NetSuite Inc. does not warrant or guarantee the individual success developers may have in implementing the sample code on their development platforms or in using their own Web server configurations. Oracle + NetSuite Inc. does not warrant, guarantee or make any representations regarding the use, results of use, accuracy, timeliness or completeness of any data or information relating to the sample code. Oracle + NetSuite Inc. disclaims all warranties, express or implied, and in particular, disclaims all warranties of merchantability, fitness for a particular purpose, and warranties related to the code, or any service or software related thereto. Oracle + NetSuite Inc. shall not be liable for any direct, indirect or consequential damages or costs of any type arising out of any action taken by you or others related to the sample code.