import colors from '../colors.js'

// '.card': {
  //     '@apply bg-white p-6 rounded-xl shadow-lg border border-gray-100': {},
  //   },
  //   '.card-title': {
  //     '@apply text-xl font-bold text-gray-900 mb-2': {},
  //   },
  //   '.card-body': {
  //     '@apply text-gray-600': {},
  //   }

const baseCards = {
  backgroundColor: 'var(--ui-card-bg)',
  "@apply rounded-xl shadow-lg border border-gray-100" : {},
}

const cardBody = {
  color: 'var(--ui-foregound)',
  "@apply p-4" :{}
}

export default {
  ".card": baseCards,
  ".card-body": cardBody
}