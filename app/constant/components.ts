import AlertDocs from "~/components/docs/AlertDocs.vue";

export const componentRegistry = {
  alert: {
    title: 'Alert',
    icon: 'lucide:badge-alert',
    variants: alertVariants.length,
    component:  AlertDocs,
  }
  // button: ButtonDocs,
}