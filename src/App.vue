<template>
  <div class="bg-design-grey-900 h-screen w-screen flex justify-center items-center">
    <card :data="data"></card>
  </div>
</template>

<script>
import { ref } from 'vue'
import Card from './components/Card.vue'

export default {
  components: {
    Card,
  },
  setup() {
    // ...
    const data = ref({
      img: '/img/card/profile-pic.png',
      name: 'Jessica Randall',
      city: 'London, United Kingdom',
      skill: 'Front-end developer and avid reader.',
      links: [
        {
          name: 'GitHub',
          link: 'javascript:void(0)',
        },
        {
          name: 'Frontend Mentor',
          link: 'javascript:void(0)',
        },
        {
          name: 'LinkedIn',
          link: 'javascript:void(0)',
        },
        {
          name: 'Twitter',
          link: 'javascript:void(0)',
        },
        {
          name: 'Instagram',
          link: 'javascript:void(0)',
        },
      ],
    })

    return {
      data,
    }
  },
}
</script>
