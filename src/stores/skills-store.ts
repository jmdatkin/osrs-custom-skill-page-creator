import { writable } from 'svelte/store';
import { LOCAL_STORAGE_KEY } from "../constants";
import type { ItemState } from "../types";

  let skills: ItemState;

  const storageData = window.localStorage.getItem(LOCAL_STORAGE_KEY);

  if (storageData)
    skills = JSON.parse(storageData) as ItemState
  else {
  skills = [
    [
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
    ],
    [
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
    ],
    [
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
    ],
    [
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
    ],
    [
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
    ],
    [
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
    ],
    [
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
    ],
    [
        {numerator: 99,
            denominator: 99, src: ""
        },
        {numerator: 99,
            denominator: 99, src: ""
        },
    ],
  ];
  }

  export const skillsStore = writable(skills)