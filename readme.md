# Hello
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# EnrolleeManagement

For EnrolleManagement
# Test Case Instructions
Run the command "npm run test" in the terminal for the angular unit test cases to get executed 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


To run the microservice, download and install Deno and run the following command in this directory from the command line:

```
deno run --allow-net server.ts
```

(Note that you have to be sure to specify `--allow-net` to grant the server network access. This is because Deno is [secure by default](https://deno.land/manual/getting_started/permissions). 👌)

The server will start on port 8080. If you need to change this (maybe you're running something else on port 8080), you can specify the port:

```
deno run --allow-net server.ts --port=8081
```

**💰BONUS CHALLENGE**💰: A developer working on the backend mentioned that one of the enrollees doesn't appear to be working. Getting or modifying this enrollee was causing an internal server error. Sadly, they couldn't remember which enrollee had this issue. Can you fix this?

# Answer
Getting or modifying an enrolle with UUID:'89a0cd0525fb4b6ea8f8fc2187f690d0': {
    active: true,
    name: 'Rand Miller',
    dateOfBirth: '1959-01-17',
  },
is causing an internal error because it is not a in proper format, Therefore not valid.

It can be solved if we change the ID as  "89a0cd05-25fb-4b6e-a8f8-fc2187f690d0"
