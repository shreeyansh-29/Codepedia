/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import ScrollButton from "../../components/scrollButton/scrollButton";
import "./practice.css";
import {Arrays} from "./arrays";
import {Matrix} from "./matrix";
import {Strings} from "./strings";
import {Searching} from "./searching";

function practice() {
  return (
    <div className="questions">
      <div>
        <p className="questions-headings ptag">Arrays</p>
        <div className="questions">
          <ul>
            <li className="list">
              {Arrays.map((item, index) => (
                <>
                  <a
                    key={index}
                    className="question-links"
                    href={item.href}
                    target="_blank"
                  >
                    {item.name}
                  </a>
                  <br />
                </>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="questions-headings">Matrix</p>
        <div className="questions">
          <ul>
            <li className="list">
              {Matrix.map((item, index) => (
                <>
                  <a
                    key={index}
                    className="question-links"
                    href={item.href}
                    target="_blank"
                  >
                    {item.name}
                  </a>
                  <br />
                </>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="questions-headings">String</p>
        <div className="questions">
          <ul>
            <li className="list">
              {Strings.map((item, index) => (
                <>
                  <a
                    key={index}
                    className="question-links"
                    href={item.href}
                    target="_blank"
                  >
                    {item.name}
                  </a>
                  <br />
                </>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="questions-headings">Searching & Sorting</p>
        <div className="questions">
          <ul>
            <li className="list">
              {Searching.map((item, index) => (
                <>
                  <a
                    key={index}
                    className="question-links"
                    href={item.href}
                    target="_blank"
                  >
                    {item.name}
                  </a>
                  <br />
                </>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="questions-headings">Binary Tress</p>
        <div className="questions">
          <ul>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/level-order-traversal/1"
                target="_blank"
              >
                level order traversal
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1"
                target="_blank"
              >
                Reverse Level Order traversal
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1"
                target="_blank"
              >
                Height of a tree
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1"
                target="_blank"
              >
                Diameter of a tree
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/"
                target="_blank"
              >
                Mirror of a tree
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/"
                target="_blank"
              >
                Inorder Traversal of a tree both using recursion and Iteration
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/"
                target="_blank"
              >
                Preorder Traversal of a tree both using recursion and Iteration
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/"
                target="_blank"
              >
                Postorder Traversal of a tree both using recursion and Iteration
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1"
                target="_blank"
              >
                Left View of a tree
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/right-view-of-binary-tree/1"
                target="_blank"
              >
                Right View of Tree
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1"
                target="_blank"
              >
                Top View of a tree
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1"
                target="_blank"
              >
                Bottom View of a tree
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1"
                target="_blank"
              >
                Zig-Zag traversal of a binary tree
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1"
                target="_blank"
              >
                Check if a tree is balanced or not
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/"
                target="_blank"
              >
                Diagnol Traversal of a Binary tree
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1"
                target="_blank"
              >
                Boundary traversal of a Binary tree
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/construct-binary-tree-string-bracket-representation/"
                target="_blank"
              >
                Construct Binary Tree from String with Bracket Representation
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1"
                target="_blank"
              >
                Convert Binary tree into Doubly Linked List
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1"
                target="_blank"
              >
                Convert Binary tree into Sum tree
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/construct-tree-1/1"
                target="_blank"
              >
                Construct Binary tree from Inorder and preorder traversal
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/#:~:text=Given%20the%20array%20representation%20of,it%20into%20Binary%20Search%20Tree.&text=Swap%201%3A%20Swap%20node%208,node%209%20with%20node%2010."
                target="_blank"
              >
                Find minimum swaps required to convert a Binary tree into BST
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/sum-tree/1"
                target="_blank"
              >
                Check if Binary tree is Sum tree or not
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="questions-headings">Binary Search Trees</p>
        <div className="questions">
          <ul>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/"
                target="_blank"
              >
                Fina a value in a BST
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://leetcode.com/problems/delete-node-in-a-bst/"
                target="_blank"
              >
                Deletion of a node in a BST
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1"
                target="_blank"
              >
                Find min and max value in a BST
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1"
                target="_blank"
              >
                Find inorder successor and inorder predecessor in a BST
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/check-for-bst/1"
                target="_blank"
              >
                Check if a tree is a BST or not{" "}
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1"
                target="_blank"
              >
                Populate Inorder successor of all nodes
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1"
                target="_blank"
              >
                Find LCA of 2 nodes in a BST
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversa/"
                target="_blank"
              >
                Construct BST from preorder traversal
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/binary-tree-to-bst/1/"
                target="_blank"
              >
                Convert Binary tree into BST
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/"
                target="_blank"
              >
                Convert a normal BST into a Balanced BST
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/"
                target="_blank"
              >
                Merge two BST [ V.V.V IMP ]
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1"
                target="_blank"
              >
                Find Kth largest element in a BST
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1"
                target="_blank"
              >
                Find Kth smallest element in a BST
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/brothers-from-different-root/1"
                target="_blank"
              >
                Count pairs from 2 BST whose sum is equal to given value "X"
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="questions-headings">Greedy</p>
        <div className="questions">
          <ul>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1"
                target="_blank"
              >
                Activity Selection Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1"
                target="_blank"
              >
                Job SequencingProblem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/huffman-encoding3345/1"
                target="_blank"
              >
                Huffman Coding
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/water-connection-problem5822/1"
                target="_blank"
              >
                Water Connection Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1"
                target="_blank"
              >
                Fractional Knapsack Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/choose-and-swap0531/1"
                target="_blank"
              >
                Greedy Algorithm to find Minimum number of Coins
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/maximum-trains-stoppage-can-provided/"
                target="_blank"
              >
                Maximum trains for which stoppage can be provided
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1"
                target="_blank"
              >
                Minimum Platforms Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/buy-maximum-stocks-stocks-can-bought-th-day/"
                target="_blank"
              >
                Buy Maximum Stocks if i stocks can be bought on i-th day
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/shop-in-candy-store1145/1"
                target="_blank"
              >
                Find the minimum and maximum amount to buy all N candies
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/"
                target="_blank"
              >
                Minimize Cash Flow among a given set of friends who have
                borrowed money from each other
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/minimum-cost-cut-board-squares/"
                target="_blank"
              >
                Minimum Cost to cut a board into squares
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/survival/"
                target="_blank"
              >
                Check if it is possible to survive on Island
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/"
                target="_blank"
              >
                Find maximum meetings in one room
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="questions-headings">Backtracking</p>
        <div className="questions">
          <ul>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1"
                target="_blank"
              >
                Rat in a maze Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/printing-solutions-n-queen-problem/"
                target="_blank"
              >
                Printing all solutions in N-Queen Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/word-break-part-23249/1"
                target="_blank"
              >
                Word Break Problem using Backtracking
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://leetcode.com/problems/remove-invalid-parentheses/"
                target="_blank"
              >
                Remove Invalid Parentheses
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/solve-the-sudoku-1587115621/1"
                target="_blank"
              >
                Sudoku Solver
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1"
                target="_blank"
              >
                m Coloring Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/"
                target="_blank"
              >
                Print all palindromic partitions of a string
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1"
                target="_blank"
              >
                Subset Sum Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/"
                target="_blank"
              >
                The Knight’s tour problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/tug-of-war/"
                target="_blank"
              >
                Tug of War
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/find-shortest-safe-route-in-a-path-with-landmines/"
                target="_blank"
              >
                Find shortest safe route in a path with landmines
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/combination-sum-1587115620/1"
                target="_blank"
              >
                Combinational Sum
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/largest-number-in-k-swaps-1587115620/1"
                target="_blank"
              >
                Find Maximum number possible by doing at-most K swaps
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1"
                target="_blank"
              >
                Print all permutations of a string{" "}
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/"
                target="_blank"
              >
                Find if there is a path of more than k length from a source
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="questions-headings">Stacks & Queues</p>
        <div className="questions">
          <ul>
            <li className="list">
              <a
                className="question-links"
                href="https://www.tutorialspoint.com/javaexamples/data_stack.htm"
                target="_blank"
              >
                {" "}
                Implement Stack from Scratch
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/"
                target="_blank"
              >
                {" "}
                Implement Queue from Scratch
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1"
                target="_blank"
              >
                Implement 2 stack in an array
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/"
                target="_blank"
              >
                find the middle element of a stack
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/"
                target="_blank"
              >
                Implement "N" stacks in an Array
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1"
                target="_blank"
              >
                Check the expression has valid or Balanced parenthesis or not.
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/reverse-a-string-using-stack/1"
                target="_blank"
              >
                Reverse a String using Stack
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/special-stack/1"
                target="_blank"
              >
                Design a Stack that supports getMin() in O(1) time and O(1)
                extra space.
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1"
                target="_blank"
              >
                Find the next Greater element
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1"
                target="_blank"
              >
                The celebrity Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/arithmetic-expression-evalution/#:~:text=The%20stack%20organization%20is%20very,i.e.%2C%20A%20%2B%20B)."
                target="_blank"
              >
                Arithmetic Expression evaluation
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1"
                target="_blank"
              >
                Evaluation of Postfix expression
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://stackoverflow.com/questions/45130465/inserting-at-the-end-of-stack"
                target="_blank"
              >
                Implement a method to insert an element at its bottom without
                using any other data structure.
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/"
                target="_blank"
              >
                Reverse a stack using recursion
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/sort-a-stack/1"
                target="_blank"
              >
                Sort a Stack using recursion
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/contest/microsoft-online-coding-assesment-8"
                target="_blank"
              >
                Merge Overlapping Intervals
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram-1587115620/1"
                target="_blank"
              >
                Largest rectangular Area in Histogram
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/valid-substring0624/1"
                target="_blank"
              >
                Length of the Longest Valid Substring
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/expression-contains-redundant-bracket-not/"
                target="_blank"
              >
                Expression contains redundant bracket or not
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1"
                target="_blank"
              >
                Implement Stack using Queue
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="questions-headings">Heap</p>
        <div className="questions">
          <ul>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/building-heap-from-array/"
                target="_blank"
              >
                Implement a Maxheap/MinHeap using arrays and recursion.
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/heap-sort/"
                target="_blank"
              >
                Sort an Array using heap. (HeapSort)
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/"
                target="_blank"
              >
                Maximum of all subarrays of size k.
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1"
                target="_blank"
              >
                “k” largest element in an array
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/"
                target="_blank"
              >
                Kth smallest and largest element in an unsorted array
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1"
                target="_blank"
              >
                Merge “K” sorted arrays. [ IMP ]
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap0144/1"
                target="_blank"
              >
                Merge 2 Binary Max Heaps
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/k-th-largest-sum-contiguous-subarray/"
                target="_blank"
              >
                Kth largest sum continuous subarrays
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://leetcode.com/problems/reorganize-string/"
                target="_blank"
              >
                Leetcode- reorganize strings
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1"
                target="_blank"
              >
                Merge “K” Sorted Linked Lists [V.IMP]
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="questions-headings">Graphs</p>
        <div className="questions">
          <ul>
            <li className="list">
              <a
                className="question-links"
                href="https://onedrive.live.com/?authkey=%21AJrTq%5FU8BPKIWDk&cid=842AECBB531CCEA4&id=842AECBB531CCEA4%211179&parId=842AECBB531CCEA4%211164&o=OneUp"
                target="_blank"
              >
                Create a Graph, print it
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1"
                target="_blank"
              >
                Implement BFS algorithm{" "}
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/"
                target="_blank"
              >
                Implement DFS Algo{" "}
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/detect-cycle-in-a-graph/"
                target="_blank"
              >
                Detect Cycle in Directed Graph using BFS/DFS Algo{" "}
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1"
                target="_blank"
              >
                Detect Cycle in UnDirected Graph using BFS/DFS Algo{" "}
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1"
                target="_blank"
              >
                Search in a Maze
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/steps-by-knight5927/1"
                target="_blank"
              >
                Minimum Step by Knight
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://leetcode.com/problems/flood-fill/"
                target="_blank"
              >
                flood fill algo
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://leetcode.com/problems/clone-graph/"
                target="_blank"
              >
                Clone a graph
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://leetcode.com/problems/number-of-operations-to-make-network-connected/"
                target="_blank"
              >
                Making wired Connections
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://leetcode.com/problems/word-ladder/"
                target="_blank"
              >
                word Ladder{" "}
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/"
                target="_blank"
              >
                Dijkstra algo
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/topological-sort/1"
                target="_blank"
              >
                Implement Topological Sort{" "}
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/"
                target="_blank"
              >
                Minimum time taken by each job to be completed given by a
                Directed Acyclic Graph
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/"
                target="_blank"
              >
                Find whether it is possible to finish all tasks or not from
                given dependencies
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1"
                target="_blank"
              >
                Find the no. of Isalnds
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/alien-dictionary/1"
                target="_blank"
              >
                Given a sorted Dictionary of an Alien Language, find order of
                characters
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/"
                target="_blank"
              >
                Implement Kruksal’sAlgorithm
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/"
                target="_blank"
              >
                Implement Prim’s Algorithm
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/total-number-spanning-trees-graph/"
                target="_blank"
              >
                Total no. of Spanning tree in a graph
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/negative-weight-cycle3504/1"
                target="_blank"
              >
                Implement Bellman Ford Algorithm
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1"
                target="_blank"
              >
                Implement Floyd warshallAlgorithm
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/"
                target="_blank"
              >
                Travelling Salesman Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/graph-coloring-applications/#:~:text=Graph%20coloring%20problem%20is%20to,are%20colored%20using%20same%20color."
                target="_blank"
              >
                Graph ColouringProblem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://leetcode.com/problems/snakes-and-ladders/"
                target="_blank"
              >
                Snake and Ladders Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/bridge-in-a-graph/"
                target="_blank"
              >
                Find bridge in a graph
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1"
                target="_blank"
              >
                Count Strongly connected Components(Kosaraju Algo)
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/bipartite-graph/"
                target="_blank"
              >
                Check whether a graph is Bipartite or Not
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/"
                target="_blank"
              >
                Detect Negative cycle in a graph
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/"
                target="_blank"
              >
                Longest path in a Directed Acyclic Graph
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="questions-headings">Trie</p>
        <div className="questions">
          <ul>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/trie-insert-and-search/"
                target="_blank"
              >
                Construct a trie from scratch
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/find-all-shortest-unique-prefixes-to-represent-each-word-in-a-given-list/"
                target="_blank"
              >
                Find shortest unique prefix for every word in a given list
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/word-break-problem-trie-solution/"
                target="_blank"
              >
                Word Break Problem | (Trie solution)
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/print-anagrams-together/1"
                target="_blank"
              >
                Given a sequence of words, print all anagrams together
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/phone-directory4628/1"
                target="_blank"
              >
                Implement a Phone Directory
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1"
                target="_blank"
              >
                Print unique rows in a given boolean matrix
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="questions-headings">Dynamic Programming</p>
        <div className="questions">
          <ul>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/coin-change2448/1"
                target="_blank"
              >
                Coin ChangeProblem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1"
                target="_blank"
              >
                Knapsack Problem{" "}
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/ncr1019/1"
                target="_blank"
              >
                Binomial CoefficientProblem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/permutation-coefficient/"
                target="_blank"
              >
                Permutation CoefficientProblem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/program-nth-catalan-number/"
                target="_blank"
              >
                Program for nth Catalan Number
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/"
                target="_blank"
              >
                Matrix Chain Multiplication{" "}
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/edit-distance3702/1"
                target="_blank"
              >
                Edit Distance
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1"
                target="_blank"
              >
                Subset Sum Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/friends-pairing-problem5425/1"
                target="_blank"
              >
                Friends Pairing Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/gold-mine-problem/"
                target="_blank"
              >
                Gold Mine Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/assembly-line-scheduling-dp-34/"
                target="_blank"
              >
                Assembly Line SchedulingProblem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/painting-the-fence3727/1"
                target="_blank"
              >
                Painting the Fenceproblem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/cutted-segments1642/1"
                target="_blank"
              >
                Maximize The Cut Segments
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1"
                target="_blank"
              >
                Longest Common Subsequence
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence2004/1"
                target="_blank"
              >
                Longest Repeated Subsequence
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence-1587115620/1"
                target="_blank"
              >
                Longest Increasing Subsequence
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/space-optimized-solution-lcs/"
                target="_blank"
              >
                Space Optimized Solution of LCS
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/lcs-of-three-strings0028/1"
                target="_blank"
              >
                LCS (Longest Common Subsequence) of three strings
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1"
                target="_blank"
              >
                Maximum Sum Increasing Subsequence
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/count-subsequences-product-less-k/"
                target="_blank"
              >
                Count all subsequences having product less than K
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/longest-subsequence-such-that-difference-between-adjacents-is-one4724/1"
                target="_blank"
              >
                Longest subsequence such that difference between adjacent is one
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/maximum-subsequence-sum-such-that-no-three-are-consecutive/"
                target="_blank"
              >
                Maximum subsequence sum such that no three are consecutive
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1"
                target="_blank"
              >
                Egg Dropping Problem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/max-length-chain/1"
                target="_blank"
              >
                Maximum Length Chain of Pairs
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix0806/1"
                target="_blank"
              >
                Maximum size square sub-matrix with all 1s
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/pairs-with-specific-difference1533/1"
                target="_blank"
              >
                Maximum sum of pairs with specific difference
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1"
                target="_blank"
              >
                Min Cost PathProblem
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/maximum-difference-of-zeros-and-ones-in-binary-string4111/1"
                target="_blank"
              >
                Maximum difference of zeros and ones in binary string
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1"
                target="_blank"
              >
                Minimum number of jumps to reach end
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/minimum-cost-to-fill-given-weight-in-a-bag1956/1"
                target="_blank"
              >
                Minimum cost to fill given weight in a bag
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{paddingBottom: "80px"}}>
        <p className="questions-headings">Bit Manipulation</p>
        <div className="questions">
          <ul>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/set-bits0143/1"
                target="_blank"
              >
                Count set bits in an integer
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1"
                target="_blank"
              >
                Find the two non-repeating elements in an array of repeating
                elements
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/bit-difference-1587115620/1"
                target="_blank"
              >
                Count number of bits to be flipped to convert A to B
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/"
                target="_blank"
              >
                Given a sequence of words, print all anagrams together
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://www.geeksforgeeks.org/calculate-square-of-a-number-without-using-and-pow/#:~:text=Given%20an%20integer%20n%2C%20calculate,*%2C%20%2F%20and%20pow().&text=A%20Simple%20Solution%20is%20to%20repeatedly%20add%20n%20to%20result."
                target="_blank"
              >
                Divide two integers without using multiplication, division and
                mod operator
              </a>
            </li>
            <li className="list">
              <a
                className="question-links"
                href="https://practice.geeksforgeeks.org/problems/power-set4302/1"
                target="_blank"
              >
                Power Set
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ScrollButton />
    </div>
  );
}

export default practice;
