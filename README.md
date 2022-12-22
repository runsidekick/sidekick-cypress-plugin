<div id="top"></div>


<!-- PROJECT SHIELDS -->

<!-- PROJECT LOGO -->
<p align="center">
  <img width="30%" height="30%" src="https://4750167.fs1.hubspotusercontent-na1.net/hubfs/4750167/Sidekick%20OS%20repo/logo-1.png">
</p>
  <p align="center">
    <a href="https://www.runsidekick.com/discord-invitation?utm_source=sidekick-readme" target="_blank"><img src="https://img.shields.io/discord/958745045308174416?style=for-the-badge&logo=discord&label=DISCORD" alt="Sidekick Discord Channel" /></a>&nbsp;
    <a href="https://www.runforesight.com?utm_source=sidekick-readme" target="_blank"><img src="https://img.shields.io/badge/Monitored%20by-Foresight-%239900F0?style=for-the-badge" alt="Foresight monitoring" /></a>&nbsp;
    <a href="https://app.runsidekick.com/sandbox?utm_source=sidekick-readme" target="_blank"><img src="https://img.shields.io/badge/try%20in-sandbox-brightgreen?style=for-the-badge" alt="Sidekick Sandbox" /></a>&nbsp;
    
</p>

  <h3 align="center">Cypress Sidekick Plugin</h3>

  <p align="center">
    Sidekick plugin for Cypress. Bring Sidekick Actions to Cypress!
    <br />
    <a href="https://docs.runsidekick.com/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.runsidekick.com">Sidekick Home</a>
    ·
    <a href="https://www.runsidekick.com/contact-us">Report Bug & Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-recipe">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#example-usage">Example Usage</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About Sidekick

Sidekick is a production debugging and on-demand logging tool where you can debug your running applications while they keep on running. Sidekick provides the ability to add logs and put non-breaking breakpoints in your application code which captures the snapshot of the application state, the call stack, variables, etc.

Sidekick Actions:
* A tracepoint is basically a non-breaking remote breakpoint. In short, it takes a snapshot of the variables when the code hits that line.
* Logpoints open the way for dynamic logging to Sidekick users. Replacing traditional logging with dynamic logging has the potential to lower stage sizes, costs, and time for log searching while adding the ability to add new logpoints without editing the source code, redeploying or restarting the application


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Sidekick Node.js Client](https://www.npmjs.com/package/@runsidekick/sidekick-agent-nodejs)


<p align="right">(<a href="#top">back to top</a>)</p>


### Prerequisites

Tested with node v16.14.2
* npm
  ```sh
  npm install npm@latest -g
  ```


<!-- GETTING STARTED -->
# Getting Started


## Installation

1. Install Cypress Sidekick Plugin
   ```sh 
   $ npm i @runsidekick/cypress
   ```

## Example usage


###  Put tracepoint on a line
  1. Add Sidekick configs into cypress.config.js
      ```js
        module.exports = defineConfig({
            e2e: {
                sidekickApiKey: '',
                sidekickApiToken: '',
                sidekickTestModeApiKey: '',
                sidekickTestModeHost: '',
                sidekickTestModePort: 80
            }
        })
      ```

  2. Import Sidekick plguin into Support/e2e.js
      ```js
        import ‘@runsidekick/cypress’

      ```
  3. Call `putTracepoint` function
      ```js
        it('putTracepoint', () => {
            const putTracepointRequest = {
                "applicationFilters": [
                    {
                        "name": "sidekick-demo-app",
                        "version": "1.0",
                        "stage": "lab",
                        "customTags": {}
                    }
                ],
                "fileName": "/app/routes/speakers.js",
                "lineNo": 24,
                "expireSecs": 300,
                "expireCount": 100,
                "persist": true
            }
            
            cy.putTracepoint(putTracepointRequest);
        })
      ```

  Then your tracepoint will be added to `line 24` in the given file. 

<br>

 

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Sidekick: [website](https://www.runsidekick.com)


<p align="right">(<a href="#top">back to top</a>)</p>
