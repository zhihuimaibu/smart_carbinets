<template>
  <view>
    <u-button @click="handleOpenDatabase">打开数据库</u-button>
    <u-button @click="handleIsOpenDatabase">是否打开数据库</u-button>
    <u-button @click="handleCreateTable">创建表</u-button>
    <u-button @click="handleInsert">插入数据</u-button>
    <u-button @click="handleSelect">查询数据</u-button>
    {{ tableData }}
  </view>
</template>

<script>
  export default {
    data() {
      return {
        tableData: null,
      }
    },
    methods: {
      handleSelect() {
        plus.sqlite.selectSql({
          name: 'smart_carbinets',
          sql: 'select * from user',
          success: (data) => {
            this.tableData = data
          },
          fail(e) {
            console.log('查询失败', e);
          }
        })
      },
      handleInsert() {
        plus.sqlite.executeSql({
          name: 'smart_carbinets',
          sql: "insert into user values('zhangsan', 'lisiwang', '3')",
          success() {
            console.log('插入数据成功');
          },
          fail(e) {
            console.log('插入数据失败', e);
          }
        })
      },
      handleCreateTable() {
        plus.sqlite.executeSql({
          name: 'smart_carbinets',
          sql: 'create table if not exists user("name" CHAR(110),"location" TEXT,"age" INT(11))',
          success() {
            console.log('创建表成功');
          },
          fail(e) {
            console.log('创建表失败', e);
          }
        })
      },
      handleOpenDatabase() {
        plus.sqlite.openDatabase({
          name: 'smart_carbinets',
          path: '_doc/carbinets.db',
          success() {
            console.log('openDatabase success');
          },
          fail(e) {
            console.log('openDatabase failed', e);
          }
        })
      },
      handleIsOpenDatabase() {
        const is = plus.sqlite.isOpenDatabase({
          name: 'smart_carbinets',
          path: '_doc/carbinets.db',
        })
        console.log(is);
      }
    }
  }
</script>

<style>

</style>
