import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  public render() {
    return (
      <div id='app'>
        <router-view />
      </div>
    )
  }
}
