import { uuid } from '@/utils/common'

export default [
  {
    id: uuid(),
    type: 'swipe',
    height: '150px',
    options: [
      { id: uuid(), img: 'https://npi-zdyx-test.oss-cn-shanghai.aliyuncs.com/file/static/theme/dave-beasley-XvniRqem_jQ-unsplash.png' },
      { id: uuid(), img: 'https://npi-zdyx-test.oss-cn-shanghai.aliyuncs.com/file/static/theme/johann-siemens-EPy0gBJzzZU-unsplash.png' },
      { id: uuid(), img: 'https://npi-zdyx-test.oss-cn-shanghai.aliyuncs.com/file/static/theme/katie-moum-OU502a_HlvI-unsplash.png' },
    ]
  },

  {
    id: uuid(),
    type: 'grid',
    border: false,
    clickable: true,
    columnNum: 4,
    options: [
      { icon: '', text: '123' },
      { icon: '', text: '123' },
      { icon: '', text: '123' },
      { icon: '', text: '123' }
    ]
  }
]