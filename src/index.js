
const AddressingMode = {
  // Non indexed, non memory
  ACCUMULATOR: Symbol('ACCUMULATOR'),
  IMMEDIATE: Symbol('IMMEDIATE'),
  IMPLIED: Symbol('IMPLIED'),
  // Non index, memory ops
  RELATIVE: Symbol('RELATIVE'),
  ABSOLUTE: Symbol('ABSOLUTE'),
  ABSOLUTE_X: Symbol('ABSOLUTE_X'),
  ABSOLUTE_Y: Symbol('ABSOLUTE_Y'),
  ZEROPAGE: Symbol('ZEROPAGE'),
  ZEROPAGE_X: Symbol('ZEROPAGE_X'),
  ZEROPAGE_Y: Symbol('ZEROPAGE_Y'),
  INDIRECT: Symbol('INDIRECT'),
  // Indexed memory ops
  ABSOLUTE_INDEXED: Symbol('ABSOLUTE_INDEXED'),
  ZEROPAGE_INDEXED: Symbol('ZEROPAGE_INDEXED'),
  INDEXED_INDIRECT: Symbol('INDEXED_INDIRECT'),
  INDIRECT_INDEXED: Symbol('INDIRECT_INDEXED'),
}

const state = (regs, status_flags, mem) => { regs, status_flags, mem }

const status_flags = (sign, overflow, breakpoint, interrupt, zero, carry) => { sign, overflow, breakpoint, interrupt, zero, carry }


const regs = (accumulator, index_x, index_y, sp, pc, status_flags) => { accumulator, index_x, index_y, sp, pc, status_flags }



const dispatch_table = {
  // JMP
  0x4c: state => instr => Object.assign({}, state, { regs: { pc: instr.operand } })

}

const step = (state, instr) => {

}

const fetch_instr = state => {

}
