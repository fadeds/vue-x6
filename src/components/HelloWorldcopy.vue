<template>
  <div class="operating" style="display: flex">
    <div id="container" style="flex: 1; width: 100%; height: 100%"></div>
  </div>
</template>
<script>
let groups = {
  group1: {
    attrs: {
      circle: {
        r: 6,
        magnet: true,
        stroke: '#31d0c6',
        strokeWidth: 2,
        fill: '#fff',
      },
    },
    markup: {
      tagName: 'circle',
      selector: 'circle',
      attrs: {
        r: 10,
        fill: '#fff',
        stroke: '#000',
      },
    },
    zIndex: 1,
    position: {
      name: 'top',
      args: {},
    },
    label: {
      markup: {
        tagName: 'text',
        selector: 'text',
        attrs: {
          fill: '#000',
        },
      },
    },
  },
  group2: {
    attrs: {
      circle: {
        r: 6,
        magnet: true,
        stroke: '#31d0c6',
        strokeWidth: 2,
        fill: '#fff',
      },
    },
    markup: {
      tagName: 'circle',
      selector: 'circle',
      attrs: {
        r: 10,
        fill: '#fff',
        stroke: '#000',
      },
    },
    zIndex: 1,
    position: {
      name: 'right',
      args: {},
    },
    label: {
      markup: {
        tagName: 'text',
        selector: 'text',
        attrs: {
          fill: '#000',
        },
      },
    },
  },
  group3: {
    attrs: {
      circle: {
        r: 6,
        magnet: true,
        stroke: '#31d0c6',
        strokeWidth: 2,
        fill: '#fff',
      },
    },
    markup: {
      tagName: 'circle',
      selector: 'circle',
      attrs: {
        r: 10,
        fill: '#fff',
        stroke: '#000',
      },
    },
    zIndex: 1,
    position: {
      name: 'bottom',
      args: {},
    },
    label: {
      markup: {
        tagName: 'text',
        selector: 'text',
        attrs: {
          fill: '#000',
        },
      },
    },
  },
  group4: {
    attrs: {
      circle: {
        r: 6,
        magnet: true,
        stroke: '#31d0c6',
        strokeWidth: 2,
        fill: '#fff',
      },
    },
    markup: {
      tagName: 'circle',
      selector: 'circle',
      attrs: {
        r: 10,
        fill: '#fff',
        stroke: '#000',
      },
    },
    zIndex: 1,
    position: {
      name: 'left',
      args: {},
    },
    label: {
      markup: {
        tagName: 'text',
        selector: 'text',
        attrs: {
          fill: '#000',
        },
      },
    },
  },
}
const data = {
  // 节点
  nodes: [
    {
      id: 'node1', // String，可选，节点的唯一标识
      x: 40, // Number，必选，节点位置的 x 值
      y: 40, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      // tools: [
      //   { name: 'boundary' },
      //   {
      //     name: 'button-remove', // 工具名称
      //     args: { x: 10, y: 10 }, // 工具对应的参数
      //   },
      // ],
      attrs: {
        label: {
          text: '正方形节点',
          fill: '#000000',
          fontSize: 14,
          textWrap: {
            width: -10,
            height: -10,
            ellipsis: true,
          },
        },
        body: {
          stroke: '#000000',
          strokeWidth: 1,
          fill: '#ffffff',
        },
      },
      ports: {
        groups,
        items: [
          {
            id: 'port1',
            group: 'group1', // 指定分组名称
          },
          {
            id: 'port2',
            group: 'group2', // 指定分组名称
          },
          {
            id: 'port3',
            group: 'group3', // 指定分组名称
          },
          {
            id: 'port4',
            group: 'group4', // 指定分组名称
          },
        ],
      },
    },
    {
      id: 'node2', // String，节点的唯一标识
      x: 160, // Number，必选，节点位置的 x 值
      y: 180, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      attrs: {
        label: {
          text: '正方形节点',
          fill: '#000000',
          fontSize: 14,
          textWrap: {
            width: -10,
            height: -10,
            ellipsis: true,
          },
        },
        body: {
          stroke: '#000000',
          strokeWidth: 1,
          fill: '#ffffff',
        },
      },
      ports: {
        groups,
        items: [
          {
            id: 'port1',
            group: 'group1', // 指定分组名称
          },
          {
            id: 'port2',
            group: 'group2', // 指定分组名称
          },
          {
            id: 'port3',
            group: 'group3', // 指定分组名称
          },
          {
            id: 'port4',
            group: 'group4', // 指定分组名称
          },
        ],
      },
    },
    {
      id: 'node3', // String，节点的唯一标识
      x: 300, // Number，必选，节点位置的 x 值
      y: 300, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      attrs: {
        label: {
          text: '正方形节点',
          fill: '#000000',
          fontSize: 14,
          textWrap: {
            width: -10,
            height: -10,
            ellipsis: true,
          },
        },
        body: {
          stroke: '#000000',
          strokeWidth: 1,
          fill: '#ffffff',
        },
      },
      ports: {
        groups,
        items: [
          {
            id: 'port1',
            group: 'group1', // 指定分组名称
          },
          {
            id: 'port2',
            group: 'group2', // 指定分组名称
          },
          {
            id: 'port3',
            group: 'group3', // 指定分组名称
          },
          {
            id: 'port4',
            group: 'group4', // 指定分组名称
          },
        ],
      },
    },
  ],
  // 边
  edges: [
    // {
    //   source: 'node1', // String，必须，起始节点 id
    //   target: 'node2', // String，必须，目标节点 id
    //   // shape: 'double-edge',
    //   shape: 'shadow-edge',
    // },
  ],
}
import { Graph, Shape, DataUri } from '@antv/x6'
import { startDragToGraph } from './methods.js'
// import RightDrawer from './RightDrawer'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    // RightDrawer,
  },
  data() {
    return {
      data,
      graph: null,
      currentArrow: 1,
      showTips: false,
      selectCell: null,
      grid: {
        // 网格设置
        size: 20, // 网格大小 10px
        visible: true, // 渲染网格背景
        type: 'mesh',
        args: {
          color: '#D0D0D0',
          thickness: 1, // 网格线宽度/网格点大小
          factor: 10,
        },
      },
      type: '',
      connectEdgeType: {
        //连线方式
        connector: 'normal',
        router: {
          name: '',
        },
      },
    }
  },
  mounted() {
    // this.$nextTick(() => {
    const _that = this
    this.graph = new Graph({
      container: document.getElementById('container'),
      // width: '100%',
      // height: '100%',
      autoResize: true,
      grid: _that.grid,
      keyboard: {
        enabled: true,
      },
      resizing: {
        //调整节点宽高
        enabled: true,
        orthogonal: false,
      },
      snapline: {
        enabled: true,
        tolerance: 10,
      },
      connecting: {
        // 节点连接
        // anchor: 'center',
        // connectionPoint: 'anchor',
        allowBlank: false,
        allowMulti: false,
        allowNode: false,
        snap: true,
        createEdge() {
          return new Shape.Edge({
            attrs: {
              line: {
                stroke: '#1890ff',
                strokeWidth: 1,
                targetMarker: {
                  name: 'classic',
                  size: 8,
                },
                strokeDasharray: 0, //虚线
                style: {
                  animation: 'ant-line 30s infinite linear',
                },
              },
            },
            label: {
              text: '',
            },
            connector: 'normal',
            router: { name: 'manhattan' },
            // connector: _that.connectEdgeType.connector,
            // router: {
            //   name: _that.connectEdgeType.router.name || '',
            // },
            zIndex: 0,
          })
        },
      },
      selecting: {
        enabled: true,
        // rubberband: true,
        // className: 'my-selecting',
        // showNodeSelectionBox: true,
        // modifiers: ['alt'],
      },
      scroller: {
        enabled: true,
        pannable: true,
        pageVisible: true,
        pageBreak: false,
      },
      mousewheel: {
        enabled: true,
        modifiers: ['ctrl', 'meta'],
      },
      // background: {
      //   color: '#fffbe6', // 设置画布背景颜色
      // },
    })
    this.graph.centerContent()
    this.graph.fromJSON(this.data)
    this.graph.history.redo()
    this.graph.history.undo()
    this.graph.on('cell:mouseleave', (e) => {
      e.cell.removeTools()
    })
    this.graph.on('blank:click', () => {
      this.type = 'grid'
    })
    this.graph.on('cell:click', ({ cell }) => {
      this.type = cell.isNode() ? 'node' : 'edge'
    })
    this.graph.on('selection:changed', (args) => {
      args.added.forEach((cell) => {
        this.selectCell = cell
        if (cell.isEdge()) {
          cell.isEdge() && cell.attr('line/strokeDasharray', 5) //虚线蚂蚁线
          cell.addTools([
            {
              name: 'vertices',
              args: {
                padding: 4,
                attrs: {
                  strokeWidth: 0.1,
                  stroke: '#2d8cf0',
                  fill: '#ffffff',
                },
              },
            },
          ])
        }
      })
      args.removed.forEach((cell) => {
        cell.isEdge() && cell.attr('line/strokeDasharray', 0) //正常线
        cell.removeTools()
      })
    })
    // });
  },
  methods: {
    // 拖拽生成正方形或者圆形
    startDrag(type, e) {
      startDragToGraph(this.graph, type, e)
    },
    // 删除节点
    deleteNode() {
      const cell = this.graph.getSelectedCells()
      console.log(cell)
      this.graph.removeCells(cell)
      // this.type = 'grid'
    },
    // 保存png
    saveToPNG() {
      this.$nextTick(() => {
        this.graph.toPNG(
          (dataUri) => {
            // 下载
            DataUri.downloadDataUri(dataUri, '资产拓扑图.png')
          },
          {
            backgroundColor: 'white',
            padding: {
              top: 50,
              right: 50,
              bottom: 50,
              left: 50,
            },
            quality: 1,
            copyStyles: false,
          }
        )
      })
    },
    // 改变边形状
    changeEdgeType(e) {
      if (e === 'normal') {
        this.connectEdgeType = {
          connector: 'normal',
          router: { name: '' },
        }
        this.currentArrow = 1
      } else if (e === 'smooth') {
        this.connectEdgeType = {
          connector: 'smooth',
          router: { name: '' },
        }
        this.currentArrow = 2
      } else {
        this.connectEdgeType = {
          connector: 'normal',
          router: { name: 'manhattan' },
        }
        this.currentArrow = 3
      }
    },
  },
}
</script>

<style>
.operating {
  height: 100%;
  width: 100%;
  flex-direction: column;
}
#container {
  flex: 1;
}
</style>
