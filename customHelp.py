"""

 

##how to comment##

multi-line comment with """ """

single-line comment with #

 

##resource##

- https://python-course.eu/python-tutorial/

- w3schools.com

- https://selenium-python.readthedocs.io/getting-started.html

 

##intall new packages##

- install pip to easily get access to other libraries

- https://pip.pypa.io/en/stable/installation/

- open cmd (command line), change directory to root, run:

  py -m pip install --upgrade pip

- add pip to environment path:

  https://www.alphr.com/pip-is-not-recognized-as-an-internal-or-external-command/

- when trying to install a package:

  open cmd, change directory to "Scripts" path and run "pip install yourpackage"

- install selemium and download webdriver:

 

"""

from selenium import webdriver

from selenium.webdriver.common.keys import Keys

import time as t

from selenium.webdriver.common.by import By

 

driverPath = r'C:\Users\SYang\AppData\Local\Programs\Python\Python39\driver\chromedriver.exe'

 

def googleSearch(whatToSearch, url='https://www.google.com/'):

    driver = webdriver.Chrome(driverPath)

    driver.get(url)

    ## wait 5 seconds before displaying error

    driver.set_page_load_timeout(5)

    try:

        search = driver.find_element('name','q')

        search.send_keys(whatToSearch)

        t.sleep(2)

        search.send_keys(Keys.RETURN)

 

        findElementBySelector(driver)

        input('enter ctrl + c to close') ## to not close the window

    except Exception as e:

        print('search bar not found')

 

def findElementBySelector(driver, selector = '.vk_bk'):

    for i in range(3):

        try:           

            resultText = driver.find_element(By.CSS_SELECTOR, selector)

            print(resultText.text)

            break

            if i == 2:

                raise Exception('did not find the element')

            t.sleep(2)

        except Exception as e:

            print(e)