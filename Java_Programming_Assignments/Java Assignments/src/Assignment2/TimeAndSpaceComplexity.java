/**
 * Write a java function that checks if the input string contains all the letters of the alphabet a-z (case-insensitive). 
 * Write time and space complexity of your solution as comments in the source file.
 * Time complexity : O(n)
 * Space complexity : 2*n+67 (Linear space complexity)
 * where n is the length of the text
 */
package Assignment2;

import java.util.HashMap;
import java.util.Scanner;

public class TimeAndSpaceComplexity {
	/**
	 * This method is used to decide whether the text contains all the alphabets or
	 * not
	 * 
	 * @param text
	 * @return boolean
	 */
	public static boolean isHavingAllLetters(String text) {
		boolean result = false;
		// converting the text to lower case
		text = text.toLowerCase();
		// creating a hashmap to store the characters (a-z) occuring the text
		HashMap<Character,Integer> listOfCharacters = new HashMap<Character,Integer>();
		// for each character in text
		for(int i=0;i<text.length();i++)
		{
			char character = text.charAt(i);
			// if the character is an alphabet
			if(character >= 'a' && character <= 'z')
			{
				// if the alphabet is not present in the hashmap
				if(listOfCharacters.containsKey(character) == false)
					// we add the alphabet to the hashmap
					listOfCharacters.put(character, 1);
			}
		}
		// if hashmap size is equal to 26 we make result true else false
		if (listOfCharacters.size() == 26) {
			result = true;
		} 
		return result;
	}

	@SuppressWarnings("resource")
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the text: ");
		String text = sc.next();
		System.out.println("Text: " + text);
		if (isHavingAllLetters(text))
			System.out.println("Yes, the entered text contains all the letters");
		else
			System.out.println("No, the entered text does not contain all the letters");
		System.out.println("Time complexity: O(n); where n is the length of the string");
		System.out.println("Space complexity: 2*n+67 (Linear space complexity); where n is the length of the string");
	}

}
