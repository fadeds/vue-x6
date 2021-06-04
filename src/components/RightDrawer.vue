<template>
  <div class="drawer_container">
    <div v-if="drawerType === 'grid'">
      <div class="drawer_title">画布背景设置</div>
      <div class="drawer_wrap">
        <el-form label-position="left" label-width="80px">
          <el-form-item label="是否显示网格" label-width="100px">
            <el-switch v-model="showGrid" @change="changeGrid" />
          </el-form-item>
          <div v-show="showGrid">
            <el-form-item label="网格类型">
              <el-radio-group v-model="grid.type" @change="changeGridType">
                <el-radio
                  v-for="item in gridTypeList"
                  :label="item.value"
                  :key="item.value"
                >
                  <span>{{ item.label }}</span>
                </el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="网格大小">
              <el-slider
                v-model="grid.size"
                :min="0"
                :max="30"
                @change="changeGrid"
              ></el-slider>
            </el-form-item>
            <el-form-item label="网格颜色">
              <el-color-picker v-model="grid.args.color" @change="changeGrid" />
            </el-form-item>
            <el-form-item label="网格线宽度" label-width="100px">
              <el-slider
                v-model="grid.args.thickness"
                :min="0"
                :max="20"
                @change="changeGrid"
              ></el-slider>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
    <div v-if="drawerType === 'node'">
      <div class="drawer_title">节点设置</div>
      <div class="drawer_wrap">
        <el-form label-position="left" label-width="100px">
          <el-form-item label="节点文本">
            <el-input
              v-model="drawerNode.nodeText"
              @change="changeNodeText"
            ></el-input>
          </el-form-item>
          <el-form-item label="节点背景">
            <el-color-picker v-model="drawerNode.fill" @change="changeFill" />
          </el-form-item>
          <el-form-item label="字体大小">
            <el-slider
              v-model="drawerNode.fontSize"
              :min="10"
              :max="20"
              @change="changefontSize"
            ></el-slider>
          </el-form-item>
          <el-form-item label="字体颜色">
            <el-color-picker
              v-model="drawerNode.fontFill"
              @change="changeFontFill"
            />
          </el-form-item>
          <el-form-item label="边框宽度">
            <el-slider
              v-model="drawerNode.strokeWidth"
              :min="0"
              :max="10"
              @change="changeStrokeWidth"
            ></el-slider>
          </el-form-item>
          <el-form-item label="边框颜色">
            <el-color-picker
              v-model="drawerNode.stroke"
              @change="changeStroke"
            />
          </el-form-item>
          <el-form-item label="功能">
            <el-button type="primary" icon="md-trending-up" @click="toTopZIndex"
              >置顶</el-button
            >
            <el-button
              type="error"
              class="margin-left-10"
              icon="md-trash"
              @click="deleteNode"
              >删除</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div v-if="drawerType === 'edge'">
      <div class="drawer_title">线条设置</div>
      <div class="drawer_wrap">
        <el-form label-position="left" label-width="100px">
          <el-form-item label="线条文本">
            <el-input
              v-model="drawerEdge.EdgeText"
              @change="changeEdgeText"
            ></el-input>
          </el-form-item>
          <el-form-item label="线条宽度">
            <el-slider
              v-model="drawerEdge.edgeWidth"
              :min="1"
              :max="10"
              @change="changeEdgeWidth"
            ></el-slider>
          </el-form-item>
          <el-form-item label="线条颜色">
            <el-color-picker
              v-model="drawerEdge.edgeColor"
              @change="changeEdgeColor"
            />
          </el-form-item>
          <el-form-item label="功能">
            <el-button type="primary" icon="md-trending-up" @click="toTopZIndex"
              >置顶</el-button
            >
            <el-button
              type="error"
              class="margin-left-10"
              icon="md-trash"
              @click="deleteNode"
              >删除</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightDrawer',
  data() {
    return {
      gridTypeList: [
        {
          label: '四边网格',
          value: 'mesh',
        },
        {
          label: '点状网格',
          value: 'dot',
        },
      ],
      showGrid: true,
      drawerNode: {
        fill: '',
        nodeText: '',
        fontSize: null,
        fontFill: '',
        strokeWidth: null,
        stroke: '',
      },
      drawerEdge: {
        EdgeText: '',
        edgeWidth: null,
        edgeColor: '',
      },
    }
  },
  props: {
    drawerType: {
      type: String,
    },
    selectCell: {
      // type: String || Object,
    },
    graph: {
      // type: Object,
    },
    grid: {
      type: Object,
    },
  },
  created() {},
  mounted() {},
  watch: {
    selectCell: {
      handler(val) {
        if (val) {
          if (val.isNode()) {
            //节点
            this.drawerNode.fill = val.store.data.attrs.body.fill
            this.drawerNode.nodeText = val.store.data.attrs.label.text
            this.drawerNode.fontFill = val.store.data.attrs.label.fill
            this.drawerNode.fontSize = Number(
              val.store.data.attrs.label.fontSize
            )
            this.drawerNode.strokeWidth = Number(
              val.store.data.attrs.body.strokeWidth
            )
            this.drawerNode.stroke = val.store.data.attrs.body.stroke
          } else {
            //边
            this.drawerEdge.EdgeText = val.store.data.labels
              ? val.store.data.labels[0].text
              : ''
            this.drawerEdge.edgeWidth = Number(
              val.store.data.attrs.line.strokeWidth
            )
            this.drawerEdge.edgeColor = val.store.data.attrs.line.stroke
          }
        }
      },
      // immediate: true,
      deep: false,
    },
  },
  methods: {
    // 网格设置
    changeGrid() {
      this.graph.drawGrid({
        ...this.grid,
      })
      this.showGrid ? this.graph.showGrid() : this.graph.hideGrid()
    },
    changeGridType(e) {
      this.grid.type = e
      this.changeGrid()
    },
    // 节点设置
    changeStrokeWidth(val) {
      this.selectCell.attr('body/strokeWidth', val)
    },
    changefontSize(val) {
      this.selectCell.attr('label/fontSize', val)
    },
    changeNodeText() {
      console.log(this.selectCell.attr)
      this.selectCell.attr('label/text', this.drawerNode.nodeText)
    },
    changeStroke(val) {
      this.drawerNode.stroke = val
      this.selectCell.attr('body/stroke', this.drawerNode.stroke)
    },
    changeFontFill(val) {
      this.drawerNode.fontFill = val
      this.selectCell.attr('label/fill', this.drawerNode.fontFill)
    },
    changeFill(val) {
      this.drawerNode.fill = val
      this.selectCell.attr('body/fill', val)
    },
    // 边设置
    changeEdgeText() {
      console.log(this.drawerEdge.EdgeText)
      this.selectCell.setLabels([
        { attrs: { label: { text: this.drawerEdge.EdgeText } } },
      ])
    },
    changeEdgeWidth(val) {
      this.drawerEdge.edgeWidth = val
      this.selectCell.attr('line/strokeWidth', this.drawerEdge.edgeWidth)
    },
    changeEdgeColor(val) {
      this.drawerEdge.stroke = val
      this.selectCell.attr('line/stroke', this.drawerEdge.stroke)
    },
    // 置顶
    toTopZIndex() {
      this.selectCell.toFront()
    },
    // 删除
    deleteNode() {
      this.$emit('deleteNode')
    },
  },
}
</script>

<style scoped>
.drawer_container {
  /* flex: 1; */
  width: 300px;
  height: 100%;
  background-color: #fff;
}
.drawer_title {
  border-bottom: 1px solid #e8eaec;
  box-sizing: border-box;
  padding: 14px 16px;
  color: #333;
  font-size: 16px;
}
.drawer_wrap {
  box-sizing: border-box;
  padding: 20px 10px 20px 20px;
}
</style>
