/**
 * Create another class in package yourname.assignment.singleton containing a non static String member variable. 
 * Add a static method that takes String as parameter and initialize the member variable and then return object of that class. 
 * Add a non static method to print the String.
 */
package test;

public class Singleton {
	private static String string;
	private static Singleton singleton = new Singleton();

	public static Singleton staticMethod(String string1) {
		/**
		 * string = string1;
		 * 
		 * The above statement throws a compilation error because we cannot access a
		 * non-static member from a static context.
		 */
		return singleton;
	}

	public void nonStaticMethod() {
		System.out.println(string);
	}
}
