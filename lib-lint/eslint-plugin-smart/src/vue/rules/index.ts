import {
  vueCoreRules,
  vueNamingRules,
  vueOrderRules,
  vueTemplateRules,
  vueTemplateStyleRules,
} from './vue2'
import { vueCompositionRules, vuePerformanceRules } from './vue3'

export default {
  // vue2
  ...vueNamingRules,
  ...vueTemplateStyleRules,
  ...vueTemplateRules,
  ...vueOrderRules,
  ...vueCoreRules,

  // vue3
  ...vueCompositionRules,
  ...vuePerformanceRules,
}
