/**
 * Create a java program to search through the home directory and look for files that match a regular expression. 
 * The program should be able to take inputs repeatedly and should print out the full absolute path of the matching files found.
 */
package Assignment1;

import java.io.File;
import java.util.Scanner;
import java.util.Stack;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class FindAbsolutePathOfFile {

	private static Pattern pattern;

	private static Pattern getPattern(String fileNameRegex) {
		Pattern pattern = Pattern.compile(fileNameRegex);
		return pattern;
	}

	/**
	 * This method is used to check whether file name matches with fileNameRegex
	 * 
	 * @param file
	 * @param fileNameRegex
	 *            is the regular expression
	 * @return true if the file name matches with fileNameRegex else false
	 */
	private static boolean isMatched(File file, String fileNameRegex) {
		boolean result = false;
		Matcher m = pattern.matcher(file.getName());
		if (m.find()) {
			result = true;
		}
		return result;
	}

	/**
	 * This method is used to find the absolute path of the files matching the
	 * regular expression
	 * 
	 * @param filePath
	 *            is the path of the file
	 * @param fileNameRegex
	 *            is the regular expression entered by the user
	 */
	public static void findPath(File filePath, String fileNameRegex) {
		// creating a stack to keep track of the list of directories
		Stack<File> fileStack = new Stack<File>();
		// adding the home or current directory to the stack
		fileStack.add(filePath);
		// iterating till the stack becomes empty
		while (fileStack.isEmpty() == false) {
			// removing an element from the stack
			File file = fileStack.pop();
			// getting the list of files from that folder
			File[] files = file.listFiles();
			// iterating over the list
			for (File f : files) {
				// getting the file name
				String fileName = f.getName();
				// if the file name starts with "." we ignore it
				if (fileName.startsWith("."))
					continue;
				else {
					// if the file is a directory
					if (f.isDirectory())
						// add the file to the stack
						fileStack.add(f);
					// else if the file is not directory we check whether the filename matches with
					// the regex
					else if (isMatched(f, fileNameRegex))
						// if matched we print its absolute path to the console
						System.out.println(f.getAbsolutePath());
				}
			}
		}
	}

	@SuppressWarnings("resource")
	public static void main(String args[]) {
		// To get the user name of the system
		String username = System.getProperty("user.name");
		// Setting the root directory
		File filePath = new File("/home/" + username + "/");
		// Taking the input from the user to continue the search or not
		Scanner sc = new Scanner(System.in);
		System.out.println("Would like to search[Y/N]?:");
		String decision = sc.next();
		// The user will be allowed to search the directory as long as he enters y or Y
		while (decision.equals("Y") || decision.equals("y")) {
			// Getting the regular expression from the user
			System.out.print("Enter the regular expression:");
			String fileNameRegex = sc.next();
			// getting the pattern object
			pattern = getPattern(fileNameRegex);
			// method to find the absolute path of the files with the entered regular
			// expression
			findPath(filePath, fileNameRegex);
			// user will be asked to enter his opinion to carry on the search
			System.out.println("Would like to search[Y/N]?:");
			decision = sc.next();
		}
		System.out.println("Program terminated");
	}
}
