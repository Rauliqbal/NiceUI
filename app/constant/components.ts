import AlertDocs from "~/components/docs/AlertDocs.vue";
import ButtonDocs from "~/components/docs/ButtonDocs.vue";

export const componentRegistry = {
  alert: {
    title: 'Alert',
    description: 'Komponen alert dengan berbagai variasi dan ikon. Sepenuhnya aksesibel dan responsif.',
    icon: 'lucide:badge-alert',
    variants: alertVariants.length,
    component:  AlertDocs,
  },
   button: {
    title: 'Button',
    description: 'Komponen Button dengan berbagai variasi dan ikon. Sepenuhnya aksesibel dan responsif.',
    icon: 'lucide:rectangle-ellipsis',
    variants: buttonVariants.length,
    component:  ButtonDocs,
  }
  // button: ButtonDocs,
}