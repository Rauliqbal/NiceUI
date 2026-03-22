import AlertDocs from "~/components/docs/AlertDocs.vue";

export const componentRegistry = {
  alert: {
    title: 'Alert',
    description: 'Komponen alert dengan berbagai variasi dan ikon. Sepenuhnya aksesibel dan responsif.',
    icon: 'lucide:badge-alert',
    variants: alertVariants.length,
    component:  AlertDocs,
  }
  // button: ButtonDocs,
}