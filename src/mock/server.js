import Mock from 'mockjs';

import yellow from './yellow/tabList.json'

Mock.mock('/mock/yellow/findTabList', {code: 200, data: yellow, message: '查询成功！'})