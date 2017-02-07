export const login = {
  template: `
    <h1>{{$ctrl.title}}</h1>
    <a ui-sref="app">Hello</a>
  `,
  controller() {
    this.title = 'Login';
  }
};
