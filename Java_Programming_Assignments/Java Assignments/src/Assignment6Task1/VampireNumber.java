/**
 * A vampire number v is a number with an even number of digits n, that can be factored into two numbers x and y each with n/2 digits and not both with trailing zeroes, where v contains precisely all the digits from x and from y, in any order. 
 * Write a java program to print first 100 vampire numbers.
 */
package Assignment6Task1;

import java.util.*;

public class VampireNumber {
	public static ArrayList<String> permutations;

	public static void main(String[] args) {
		System.out.println("First hundred Vampire Numbers are : ");
		int numberOfVampireNumbers = 1;
		// vampire numbers start with 1260
		int number = 1260;
		// while numberOfVampireNumbers <= 100
		while (numberOfVampireNumbers <= 100) {
			// if the current number is vampire print the number and increment the counter
			if (isVampire(number)) {
				System.out.println(number);
				numberOfVampireNumbers = numberOfVampireNumbers + 1;
			}
			// increment the number by 1
			number = number + 1;
		}
	}

	/**
	 * This takes a number and returns true if the number is vampire else false
	 * 
	 * @param number
	 * @return boolean
	 */
	private static boolean isVampire(int number) {
		boolean flag = false;
		// re-initializing the permutations array list
		permutations = new ArrayList<String>();
		// converting the number to string
		String snumber = number + "";
		// this method fills the permutations arraylist with the permutations of the
		// number
		permute(snumber, 0, snumber.length() - 1);
		// for each permutation of the number checking for the vampire condition
		for (String permutation : permutations) {
			int firstHalf = Integer.parseInt(permutation.substring(0, permutation.length() / 2));
			int secondHalf = Integer.parseInt(permutation.substring(permutation.length() / 2, permutation.length()));
			if (firstHalf * secondHalf == number) {
				// setting the flag to true if the condition is true
				flag = true;
				break;
			}
		}
		return flag;
	}

	/**
	 * This fills the permutations arraylist with the permuations of the given
	 * number
	 * 
	 * @param snumber
	 * @param start
	 * @param end
	 */
	private static void permute(String snumber, int start, int end) {
		if (start == end)
			permutations.add(snumber);
		else if (snumber.startsWith("0") == false) {
			for (int i = start; i <= end; i++) {
				snumber = swap(snumber, start, i);
				permute(snumber, start + 1, end);
				snumber = swap(snumber, start, i);
			}
		}
		return;
	}

	/**
	 * This method is used to swap the characters of the string
	 * 
	 * @param snumber
	 * @param start
	 * @param end
	 * @return
	 */
	private static String swap(String snumber, int start, int end) {
		char temp;
		char[] charArray = snumber.toCharArray();
		temp = charArray[start];
		charArray[start] = charArray[end];
		charArray[end] = temp;
		return String.valueOf(charArray);
	}
}
