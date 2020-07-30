/*
 * @Description:
 * @Autor: 吕殿朝
 * @Date: 2020-07-27 10:37:26
 * @LastEditors: 吕殿朝
 * @LastEditTime: 2020-07-29 10:28:58
 */

/**
 * @module 节流
 * @author: lvdianzhao
 * @description: ifredom是一位FD.
 * @since: 创建时间  2020-07-29 10:28:50
 */

function throttle(f, wait) {
  let timer;
  return (...args) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      f(...args);
    }, wait);
  };
}
