
# Image Uploader [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs) [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/) [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

A simple image uploading app. Upload any kind of images and see instant feedback on the main screen.
## Appendix

This app allows you to upload almost any kind of images. This app uses ReactJS at the frontend and uses Django Rest API to upload and fetch data.
## Features

- Upload Images
- Pop-up modal for uploader
- Responsive design
- Live Preview of uploaded images
## Run Locally

Clone the project

```bash
  git clone https://github.com/adijoshi82812/django-react-image.git
```

### Run the backend server

Go to the backend directory

```bash
  cd backend
```

Create Virtual Environment

```bash
  python3 -m venv backend-env
```

Activate the virtual environment

```bash
  source backend-env/bin/activate
```

Install requirements.txt

```bash
  pip install -r requirements.txt
```

Run the backend server

```bash
  python3 manage.py runserver
```

### Run the frontend server

Go to frontend directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Run the frontend server

```bash
  npm start
```

**Note** : Download w3.css framework from https://www.w3schools.com/w3css/4/w3.css and add it inside the frontend/src directory.
## Screenshots

![HomePage](https://raw.githubusercontent.com/adijoshi82812/django-react-image/main/screenshots/1.png) \
![Upload Image](https://raw.githubusercontent.com/adijoshi82812/django-react-image/main/screenshots/2.png)
## Feedback

If you have any feedback, please reach out to me at adijoshi82812@gmail.com
## Authors

- [@Aditya Joshi](https://www.github.com/adijoshi82812)
## 🚀 About Me

I'm a full stack developer. I use python-django at the Back End and react.js at the Front End.