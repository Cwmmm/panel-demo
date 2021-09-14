# 配置表单组件

## 概述

通过配置生成表单布局,key-value 形式收集并验证表单数据,提交请求

## 组件地址

panel: "@/components/panel/index"

## 演示地址

@/views/panelExample

## 参数

### formData

```json
      [
        //列数据
        [
          {
            //表单对应的keyname
            key: 'activityName',
            //组件类型:input select datePicker radio单选 swith开关 checkbox多选
            type: 'input',
            //栅格栏数:总数24
            span: 12,
            //子组件prop
            attrs: {
              //类型
              type: 'text',
              //表单对应的value
              value: '',
              label: '活动名称',
          }
        ]
      ]
```

### rules

    验证规则,对应el-form的rules

### subUrl

    表单提交地址
