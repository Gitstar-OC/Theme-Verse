
export const navigation = [
    {
      id: "0",
      title: "Home",
      url: "#Home",
    },
    {
      id: "1",
      title: "Themes",
      url: "#Themes",
    },
    {
      id: "2",
      title: "About",
      url: "#About",
    },
    {
      id: "3",
      title: "Contact",
      url: "#Contact",
    },
];



// Constants/index.js

export const projects = [
  {
    id: "0",
    name: 'Payment Website',
    url: 'https://gitstar-oc.github.io/Payment-website/',
    description: 'A comprehensive payment website with secure transaction features and a user-friendly interface.',
    technologies: ['React', 'Tailwind', 'Vite'],
    price: 50
  },
  {
    id: "1",
    name: 'Nike Website',
    url: 'https://gitstar-oc.github.io/Nike/',
    description: 'An e-commerce site for Nike, showcasing the latest products with an intuitive shopping experience.',
    technologies: ['React', 'Tailwind', 'Vite'],
    price: 100
  },
  {
    id: "2",
    name: 'Brainware AI',
    url: 'https://gitstar-oc.github.io/BrainwareAI/',
    description: 'An AI-based platform that provides intelligent solutions for various industries.',
    technologies: ['React', 'Tailwind', 'Vite'],
    price: 200
  },
  {
    id: "3",
    name: 'Little Lemon',
    url: 'https://gitstar-oc.github.io/Little-Lemon/',
    description: 'A charming website for a small restaurant, emphasizing a cozy and delightful dining experience.',
    technologies: ['React', 'Chakra UI', 'CSS'],
    price: 100
  },
  {
    id: "4",
    name: 'GPT',
    url: 'https://gitstar-oc.github.io/GPT3/',
    description: 'A showcase of the capabilities of GPT-3, demonstrating advanced AI text generation and interaction.',
    technologies: ['React', 'CSS'],
    price: 150
  },
  {
    id: "5",
    name: 'GERICHT',
    url: 'https://gitstar-oc.github.io/GERICHT/',
    description: 'A modern restaurant website with an elegant design and a focus on fine dining.',
    technologies: ['React', 'Tailwind'],
    price: 150
  },
  {
    id: "6",
    name: 'Grilli',
    url: 'https://gitstar-oc.github.io/Grilli/',
    description: 'A grilling-themed website featuring recipes, tips, and a community for barbecue enthusiasts.',
    technologies: ['Vanilla JavaScript', 'CSS'],
    price: 200
  },
  {
    id: "7",
    name: 'Sushiman',
    url: 'https://gitstar-oc.github.io/Sushi_Resto/',
    description: 'A sophisticated sushi restaurant website with beautiful imagery and an easy-to-navigate menu.',
    technologies: ['Vanilla JavaScript', 'CSS'],
    price: 80
  }
];


export const skillsData = [
  'HTML 100',
  'Bootstrap 100',
  'CSS 100',
  'Django 20',
  'Figma 100',
  'Flask 20',
  'Github 100',
  'Javascript 100',
  'Jupyter 100',
  'Next.js 50',
  'NumPy 100',
  'Python 100',
  'PyTorch 20',
  'React 100',
  'Scikit-learn 40',
  'SQLite 40',
  'Tailwind 100',
  'TensorFlow 50',
  'Typescript 20',
  'Vite.js 100'
];

import HTML from '../assets/Skills/HTML5.svg';
import Bootstrap from '../assets/Skills/Bootstrap.svg';
import CSS from '../assets/Skills/CSS3.svg';
import Django from '../assets/Skills/Django.svg';
import Figma from '../assets/Skills/Figma.svg';
import Flask from '../assets/Skills/Flask.svg';
import Github from '../assets/Skills/GitHub.svg';
import JavaScript from '../assets/Skills/JavaScript.svg';
import Jupyter from "../assets/Skills/Jupyter.png";
import NextJS from '../assets/Skills/Next.js.svg';
import NumPy from '../assets/Skills/NumPy.svg';
import Python from '../assets/Skills/Python.svg';
import PyTorch from '../assets/Skills/PyTorch.svg';
import React from '../assets/Skills/React.svg';
import ScikitLearn from '../assets/Skills/scikit-learn.svg';
import SQLite from '../assets/Skills/SQLite.svg';
import Tailwind from '../assets/Skills/Tailwind CSS.svg';
import TensorFlow from '../assets/Skills/TensorFlow.svg';
import TypeScript from '../assets/Skills/TypeScript.svg';
import ViteJS from '../assets/Skills/Vite.js.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  let image;
  switch (skillID) {
    case 'html':
      image = HTML;
      break;
    case 'bootstrap':
      image = Bootstrap;
      break;
    case 'css':
      image = CSS;
      break;
    case 'django':
      image = Django;
      break;
    case 'figma':
      image = Figma;
      break;
    case 'flask':
      image = Flask;
      break;
    case 'github':
      image = Github;
      break;
    case 'javascript':
      image = JavaScript;
      break;
    case 'jupyter':
      image = Jupyter;
      break;
    case 'next.js':
      image = NextJS;
      break;
    case 'numpy':
      image = NumPy;
      break;
    case 'python':
      image = Python;
      break;
    case 'pytorch':
      image = PyTorch;
      break;
    case 'react':
      image = React;
      break;
    case 'scikit-learn':
      image = ScikitLearn;
      break;
    case 'sqlite':
      image = SQLite;
      break;
    case 'tailwind':
      image = Tailwind;
      break;
    case 'tensorflow':
      image = TensorFlow;
      break;
    case 'typescript':
      image = TypeScript;
      break;
    case 'vite.js':
      image = ViteJS;
      break;
    default:
      console.log('No image found for:', skillID);  // Log if no image is found
      break;
  }
  console.log(skillID, image);  // Log skillID and the resolved image path
  return image;
};
