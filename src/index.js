//@ts-check

const { countTotalStartups } = require("./startup_counter");

/**
 * @file Welcome to the Home page of Documentation for Application Code!
 * @author O.S.
 * //@see <a href="https://github.com/sapronova">My GITHUB!</a>
 */

/**
 * Name project
 * @type {string}
 */
const projName = "JSdoc";

/**
 * Name project
 * @type {number}
 */
const projNumber = 1;

/**
 * Name project
 * @type {Array<number>}
 */
const arrOfProjects = [projNumber, projNumber];

/**
 * my projects Object
 * @type {{id: number, name: string, owner: string}}
 */
const myProjectFirst = {
  id: 1,
  name: "cyberCuber",
  owner: "o.s.",
};

/**
 *
 * @typedef {Object} Project
 * @property {number} id
 * @property {string} name
 * @property {string} owner
 * @property {boolean} [isFinished] {optional}
 */

/**
 * @type {Project}
 */
const myProjectSecond = {
  id: 2,
  name: "mostHunted",
  owner: "o.s.",
  isFinished: false,
};

/**
 * calculate Project term
 * @param {number} currentDate current day
 * @param {number} startDate date when the project started
 * @returns {string}
 */
const calculateProjectTerm = (currentDate, startDate) => {
  return `${currentDate - startDate}`;
};

class StartUp {
  /**
   * Class to create a new startup
   * @param {Object} startupInfo
   */
  constructor(startupInfo) {
    /**
     * @property {string} name startup name
     */
    this.name = startupInfo.name;
    /**
     * @property {string} category startup category
     */
    this.category = startupInfo.category;
  }

  /**
   * @property {Function} printName
   * @returns {void}
   */
  printName() {
    console.log(`Welcome to see startup ${this.name}`);
  }
}

/**
 * define class for new Startup-object
 * See {@link StartUp}
 */
const startup1 = new StartUp({
  name: "BeepJeep",
  category: "social",
});

startup1.printName();
console.log(countTotalStartups(1, 1));
