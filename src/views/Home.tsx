import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld'

@Component
export default class Home extends Vue {
  public render() {
    return (
      <div class='home'>
        <HelloWorld msg='Welcome to Your Vue.js + TypeScript App' />
      </div>
    )
  }
}
