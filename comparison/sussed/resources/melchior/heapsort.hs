module Sussed.HeapSort where

import Melchior.Data.String

data Heap a = Nil | Node a [Heap a]
heapify x = Node x []

hsort :: Ord a =>  [a] -> [a]
hsort h = flattenHeap $ mergeHeaps $ map heapify h
          where
            mergeHeaps = treeFold mergeHeap Nil
            flattenHeap Nil = []
            flattenHeap (Node x heaps) = x:flattenHeap (mergeHeaps heaps)
            mergeHeap h Nil = h
            mergeHeap a@(Node x heaps) b@(Node y heapd)
              | x < y = Node x (b:heaps)
              | otherwise = Node y (a:heapd)

treeFold _ x [] = x
treeFold _ _ [x] = x
treeFold f x (a:b:c) = treeFold f x (f a b : pairFold c)
                       where
                         pairFold (x:y:rest) = f x y : pairFold rest
                         pairFold a = a

main = return $! stringToJSString $ show $ hsort [1,9,7,4,6,3,2,7,5,3,7,9,7,4,2,5,7,8,5,4,3,6,7,8,6,5,4,3,2,4,5,6]