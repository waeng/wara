export const isFalsy = (value) => value === 0 ? value : !!value
//在一个函数中，改变传入的对象本身是不好的
export const cleanObject = (object) => {
    const result = {...object}
    Object.keys(result).forEach(key => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}